import * as admin from "firebase-admin"
import * as rulesTester from "@firebase/rules-unit-testing"
import {firestore} from "firebase-admin/lib/firestore";
import FieldValue = firestore.FieldValue;

const projectId = 'test-project' // this is also set when starting the emulators
const clientOptions = {projectId}
process.env.GCLOUD_PROJECT = projectId
process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080"

describe("firestore serverTimestamp", () => {
  it("admin allows serverTimestamp", async () => {
    await admin.initializeApp(clientOptions)
      .firestore()
      .collection("test")
      .doc("1")
      .set({
        timestamp: FieldValue.serverTimestamp(),
      })
  })
  it("rulesTester allows serverTimestamp", async () => {
    await rulesTester.initializeTestApp(clientOptions)
      .firestore()
      .collection("test")
      .doc("1")
      .set({
        timestamp: FieldValue.serverTimestamp(),
      })
  })
})
