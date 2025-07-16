import { ReadStream } from 'node:fs';
import { readSync, writeSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import { Readable, Writable } from 'node:stream';
import assert from 'node:assert';

function drainStdioBuffers() {
  const drainBuffer = Buffer.alloc(4096);

  try {
    while (readSync(1, drainBuffer) > 0);
  } catch {}

  try {
    while (readSync(2, drainBuffer) > 0);
  } catch {}
}

export const processStdioPropertiesTest = {
  test() {
    assert.strictEqual(process.stdin.fd, 0, 'stdin should have fd 0');
    assert(
      process.stdin instanceof Readable,
      'stdin should be instance of Readable'
    );
    assert(
      process.stdin instanceof ReadStream,
      'stdin should be instance of ReadStream'
    );

    assert.strictEqual(process.stdout.fd, 1, 'stdout should have fd 1');
    assert.strictEqual(
      process.stdout.readable,
      false,
      'stdout should not be readable'
    );
    assert.strictEqual(
      process.stdout._type,
      'fs',
      'stdout should have _type "fs"'
    );
    assert.strictEqual(
      process.stdout._isStdio,
      true,
      'stdout should have _isStdio true'
    );
    assert(
      process.stdout instanceof Writable,
      'stdout should be instance of Writable'
    );

    assert.strictEqual(process.stderr.fd, 2, 'stderr should have fd 2');
    assert.strictEqual(
      process.stderr.readable,
      false,
      'stderr should not be readable'
    );
    assert.strictEqual(
      process.stderr._type,
      'fs',
      'stderr should have _type "fs"'
    );
    assert.strictEqual(
      process.stderr._isStdio,
      true,
      'stderr should have _isStdio true'
    );
    assert(
      process.stderr instanceof Writable,
      'stderr should be instance of Writable'
    );
  },
};

export const processStdioWriteTest = {
  test() {
    drainStdioBuffers();

    process.stdout.write('Test string write to stdout\n');
    process.stderr.write('Test string write to stderr\n');

    const bufferData = Buffer.from('Test buffer write\n');
    process.stdout.write(bufferData);
    process.stderr.write(bufferData);

    const uint8Array = new Uint8Array([72, 101, 108, 108, 111, 10]); // "Hello\n"
    process.stdout.write(uint8Array);
    process.stderr.write(uint8Array);

    process.stdout.write('Test UTF-8: café\n', 'utf8');
    process.stdout.write('Test base64: ', 'utf8');
    process.stdout.write('SGVsbG8gV29ybGQh', 'base64'); // "Hello World!"
    process.stdout.write('\n');
  },
};

export const processStdioCallbackTest = {
  async test() {
    drainStdioBuffers();

    await new Promise((resolve, reject) => {
      process.stdout.write('Test with callback\n', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    await new Promise((resolve, reject) => {
      process.stdout.write(
        'Test with encoding and callback\n',
        'utf8',
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  },
};

export const processStdioStreamMethodsTest = {
  test() {
    drainStdioBuffers();

    assert(
      typeof process.stdout.end === 'function',
      'stdout should have end method'
    );
    assert(
      typeof process.stdout.cork === 'function',
      'stdout should have cork method'
    );
    assert(
      typeof process.stdout.uncork === 'function',
      'stdout should have uncork method'
    );
    assert(
      typeof process.stdout.destroy === 'function',
      'stdout should have destroy method'
    );

    process.stdout.cork();
    process.stdout.write('Corked write 1\n');
    process.stdout.write('Corked write 2\n');
    process.stdout.uncork(); // Should flush the buffered writes
  },
};

export const processStdinTest = {
  test() {
    assert.strictEqual(process.stdin.fd, 0, 'stdin should have fd 0');
    assert(process.stdin instanceof Readable, 'stdin should be Readable');

    let dataReceived = false;
    let endReceived = false;

    process.stdin.on('data', (chunk) => {
      dataReceived = true;
      console.log('Received data from stdin:', chunk);
    });

    process.stdin.on('end', () => {
      endReceived = true;
    });
  },
};

export const fdBasedOperationsTest = {
  test() {
    drainStdioBuffers();

    const message = 'Direct writeSync to stdout\n';
    const buffer = Buffer.from(message);
    const bytesWritten = writeSync(1, buffer);
    assert.strictEqual(
      bytesWritten,
      buffer.length,
      'writeSync should return correct byte count'
    );

    const errorMessage = 'Direct writeSync to stderr\n';
    const errorBuffer = Buffer.from(errorMessage);
    const errorBytesWritten = writeSync(2, errorBuffer);
    assert.strictEqual(
      errorBytesWritten,
      errorBuffer.length,
      'writeSync to stderr should return correct byte count'
    );
  },
};

export const stdioReadBackTest = {
  test() {
    drainStdioBuffers();

    const testMessage = 'Test FIFO buffer\n';
    process.stdout.write(testMessage);

    // Read back from stdout
    const readBuffer = Buffer.alloc(100);
    const bytesRead = readSync(1, readBuffer);
    assert.strictEqual(
      bytesRead,
      testMessage.length,
      'Should read same number of bytes'
    );
    assert.strictEqual(
      readBuffer.slice(0, bytesRead).toString(),
      testMessage,
      'Read data should match written data'
    );

    // Test stderr
    const errorMessage = 'Error FIFO buffer\n';
    process.stderr.write(errorMessage);

    // Read back from stderr
    const errorReadBuffer = Buffer.alloc(100);
    const errorBytesRead = readSync(2, errorReadBuffer);
    assert.strictEqual(
      errorBytesRead,
      errorMessage.length,
      'Should read same number of bytes from stderr'
    );
    assert.strictEqual(
      errorReadBuffer.slice(0, errorBytesRead).toString(),
      errorMessage,
      'Read error data should match written data'
    );

    // Test partial reads
    const longMessage = 'This is a longer message for partial read testing\n';
    const longBuffer = Buffer.from(longMessage);
    writeSync(1, longBuffer);

    // Read in chunks
    const chunk1 = Buffer.alloc(10);
    const chunk2 = Buffer.alloc(10);
    const bytesRead1 = readSync(1, chunk1, 0, 10, null);
    const bytesRead2 = readSync(1, chunk2, 0, 10, null);

    assert.strictEqual(bytesRead1, 10, 'First chunk should read 10 bytes');
    assert.strictEqual(bytesRead2, 10, 'Second chunk should read 10 bytes');
    assert.strictEqual(
      chunk1.toString(),
      longMessage.slice(0, 10),
      'First chunk should match'
    );
    assert.strictEqual(
      chunk2.toString(),
      longMessage.slice(10, 20),
      'Second chunk should match'
    );

    // Test ring buffer growth
    drainStdioBuffers();

    // Write data that will cause the buffer to grow (initial capacity is 4096)
    const largeData = 'x'.repeat(5000) + '\n';
    process.stdout.write(largeData);

    const largeReadBuffer = Buffer.alloc(6000);
    const largeBytesRead = readSync(1, largeReadBuffer);
    assert.strictEqual(
      largeBytesRead,
      largeData.length,
      'Should read all bytes from grown buffer'
    );
    assert.strictEqual(
      largeReadBuffer.slice(0, largeBytesRead).toString(),
      largeData,
      'Large data should match after buffer growth'
    );

    // Test ring buffer wrap-around behavior
    drainStdioBuffers();

    // Fill buffer partially, read some, then write more to cause wrap-around
    const part1 = 'A'.repeat(3000);
    const part2 = 'B'.repeat(2000);
    const part3 = 'C'.repeat(1500);

    process.stdout.write(part1);

    // Read part of it
    const tempBuffer = Buffer.alloc(2000);
    const tempRead = readSync(1, tempBuffer);
    assert.strictEqual(tempRead, 2000, 'Should read 2000 bytes');
    assert.strictEqual(
      tempBuffer.toString(),
      'A'.repeat(2000),
      'Should read As'
    );

    // Now write more data that will wrap around in the ring buffer
    process.stdout.write(part2);
    process.stdout.write(part3);

    // Read remaining data
    const remainingBuffer = Buffer.alloc(5000);
    const remainingRead = readSync(1, remainingBuffer);
    const expectedRemaining = 'A'.repeat(1000) + part2 + part3;
    assert.strictEqual(
      remainingRead,
      expectedRemaining.length,
      'Should read all remaining bytes'
    );
    assert.strictEqual(
      remainingBuffer.slice(0, remainingRead).toString(),
      expectedRemaining,
      'Wrapped data should be read correctly'
    );

    // Test multiple growths
    drainStdioBuffers();

    // Write data that will cause multiple buffer growths
    const veryLargeData = 'Z'.repeat(20000);
    process.stdout.write(veryLargeData);

    const veryLargeReadBuffer = Buffer.alloc(20000);
    const veryLargeBytesRead = readSync(1, veryLargeReadBuffer);
    assert.strictEqual(
      veryLargeBytesRead,
      veryLargeData.length,
      'Should handle multiple buffer growths'
    );
    assert.strictEqual(
      veryLargeReadBuffer.slice(0, veryLargeBytesRead).toString(),
      veryLargeData,
      'Data should be intact after multiple growths'
    );
  },
};

export const processStdioEdgeCasesTest = {
  test() {
    drainStdioBuffers();
    process.stdout.write('');
    process.stderr.write('');

    process.stdout.write('\n');
    process.stderr.write('\n');

    const largeData = 'x'.repeat(1000) + '\n';
    process.stdout.write(largeData);

    process.stdout.write('Special chars: \t\r\n\0\x1b[31mred\x1b[0m\n');

    try {
      process.stdout.write(123);
      assert.fail('Should have thrown TypeError for number');
    } catch (err) {
      assert.strictEqual(err.code, 'ERR_INVALID_ARG_TYPE');
    }

    process.stdout.write(String(123));
    process.stdout.write('\n');
    process.stdout.write(String(true));
    process.stdout.write('\n');
  },
};

export const ringBufferStressTest = {
  test() {
    drainStdioBuffers();

    // Test alternating writes and reads to exercise wrap-around
    const chunkSize = 1000;
    const numIterations = 10;

    for (let i = 0; i < numIterations; i++) {
      const writeData = String.fromCharCode(65 + (i % 26)).repeat(chunkSize);
      process.stdout.write(writeData);

      const readBuffer = Buffer.alloc(chunkSize);
      const bytesRead = readSync(1, readBuffer);
      assert.strictEqual(
        bytesRead,
        chunkSize,
        `Iteration ${i}: Should read full chunk`
      );
      assert.strictEqual(
        readBuffer.toString(),
        writeData,
        `Iteration ${i}: Data should match`
      );
    }

    // Test writing at the edge of max capacity
    drainStdioBuffers();

    // Try to write close to the max capacity (4GB)
    // We'll test with a much smaller size to avoid memory issues
    const nearMaxData = 'M'.repeat(1000000); // 1MB
    process.stdout.write(nearMaxData);

    const nearMaxReadBuffer = Buffer.alloc(1000000);
    const nearMaxBytesRead = readSync(1, nearMaxReadBuffer);
    assert.strictEqual(
      nearMaxBytesRead,
      nearMaxData.length,
      'Should handle large data near max'
    );
    assert.strictEqual(
      nearMaxReadBuffer.slice(0, nearMaxBytesRead).toString(),
      nearMaxData,
      'Large data should be intact'
    );

    // Test empty buffer behavior
    drainStdioBuffers();

    const emptyReadBuffer = Buffer.alloc(100);
    const emptyBytesRead = readSync(1, emptyReadBuffer);
    assert.strictEqual(
      emptyBytesRead,
      0,
      'Reading from empty buffer should return 0'
    );

    // Test single byte operations
    drainStdioBuffers();

    for (let i = 0; i < 10; i++) {
      process.stdout.write(String(i));
      const singleByteBuffer = Buffer.alloc(1);
      const singleBytesRead = readSync(1, singleByteBuffer);
      assert.strictEqual(
        singleBytesRead,
        1,
        `Single byte ${i}: Should read 1 byte`
      );
      assert.strictEqual(
        singleByteBuffer.toString(),
        String(i),
        `Single byte ${i}: Should match`
      );
    }
  },
};

export const ringBufferOverwriteTest = {
  test() {
    drainStdioBuffers();

    // Test overwriting old data when buffer is at max capacity (4MB)
    // First, fill the buffer to near capacity
    const fillSize = 4 * 1024 * 1024 - 1000; // 4MB - 1KB
    const fillData = 'F'.repeat(fillSize);
    process.stdout.write(fillData);

    // Now write additional data that will cause overwriting
    const overwriteData = 'O'.repeat(2000); // 2KB
    process.stdout.write(overwriteData);

    // Read all data - we should get the last 4MB of data
    const readBuffer = Buffer.alloc(4 * 1024 * 1024);
    const bytesRead = readSync(1, readBuffer);

    // We should have 4MB - 1 byte of data (due to the empty slot convention)
    const expectedSize = 4 * 1024 * 1024 - 1;
    assert.strictEqual(
      bytesRead,
      expectedSize,
      'Should have 4MB-1 after overwrite'
    );

    // Since we wrote (4MB - 1KB) of 'F' then 2KB of 'O', and can only store (4MB - 1),
    // we should have dropped the first 1KB + 1 byte of data.
    // So we expect: remaining 'F's followed by all 2KB of 'O'
    const readStr = readBuffer.slice(0, bytesRead).toString();
    const expectedFs = fillSize - 1001; // We dropped 1001 bytes
    const expectedOs = 2000;

    // Verify the content
    assert.strictEqual(
      readStr.slice(0, expectedFs),
      'F'.repeat(expectedFs),
      'Should have remaining Fs'
    );
    assert.strictEqual(
      readStr.slice(expectedFs),
      'O'.repeat(expectedOs),
      'Should have all Os at the end'
    );

    // Test writing data larger than max capacity
    drainStdioBuffers();

    const hugeData = 'H'.repeat(5 * 1024 * 1024); // 5MB
    process.stdout.write(hugeData);

    const hugeReadBuffer = Buffer.alloc(5 * 1024 * 1024);
    const hugeBytesRead = readSync(1, hugeReadBuffer);

    // Should only get the last 4MB - 1 byte
    assert.strictEqual(
      hugeBytesRead,
      4 * 1024 * 1024 - 1,
      'Should only store last 4MB-1 of huge write'
    );
    assert.strictEqual(
      hugeReadBuffer.slice(0, hugeBytesRead).toString(),
      'H'.repeat(4 * 1024 * 1024 - 1),
      'Should contain only H characters'
    );

    // Test that the buffer behaves as a circular buffer when at max capacity
    drainStdioBuffers();

    // Fill the buffer to exactly max capacity - 1
    const maxData = 'M'.repeat(4 * 1024 * 1024 - 1);
    process.stdout.write(maxData);

    // Now write 1KB more - this should cause the oldest 1KB to be dropped
    const newData = 'N'.repeat(1024);
    process.stdout.write(newData);

    // Read all data
    const allDataBuffer = Buffer.alloc(4 * 1024 * 1024);
    const allBytesRead = readSync(1, allDataBuffer);

    // Should still have max capacity - 1 bytes
    assert.strictEqual(
      allBytesRead,
      4 * 1024 * 1024 - 1,
      'Should maintain max capacity'
    );

    // The first 1KB should now be 'M' (not the original first 1KB)
    // and the last 1KB should be 'N'
    const allDataStr = allDataBuffer.slice(0, allBytesRead).toString();
    assert.strictEqual(
      allDataStr.slice(0, 1024),
      'M'.repeat(1024),
      'First 1KB should still be M'
    );
    assert.strictEqual(
      allDataStr.slice(-1024),
      'N'.repeat(1024),
      'Last 1KB should be N'
    );

    // Test simple FIFO behavior without overwriting
    drainStdioBuffers();

    // Write alternating patterns and read them back
    for (let i = 0; i < 5; i++) {
      const writeData = String(i).repeat(1024);
      process.stdout.write(writeData);
    }

    // Now read them back in order
    for (let i = 0; i < 5; i++) {
      const readBuffer = Buffer.alloc(1024);
      const bytesRead = readSync(1, readBuffer);
      assert.strictEqual(bytesRead, 1024, `Read ${i}: Should read 1KB`);
      assert.strictEqual(
        readBuffer.toString(),
        String(i).repeat(1024),
        `Read ${i}: Should read data in FIFO order`
      );
    }
  },
};
