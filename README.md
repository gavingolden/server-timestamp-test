# server-timestamp-test

## Steps to Reproduce
1. This uses a fake emulator project called `test-project`. It is passed to the `firebase emulators:exec` command and also referenced in the code.
1. Run `npm test`
1. See how the adminSdk successfully creates a Firestore document using `FieldValue.serverTimestamp()` but the `rules-unit-testing` sdk does not.
