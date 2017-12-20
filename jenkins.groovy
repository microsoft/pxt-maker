import jobs.generation.Utilities;
import jobs.generation.InternalUtilities;

def project = GithubProject
def projectName = "pxt-adafruit-metro"

[true, false].each { isPR ->
    def newJobName = projectName

    if (isPR) {
        newJobName += "_PR"
    } else {
        newJobName += "_Push"
    }

    def newJob = job(newJobName) {
        steps {
            shell("chmod +x ./jenkins.sh")
            shell("./jenkins.sh ${isPR}")
        }

        if (!isPR) {
            wrappers {
                credentialsBinding {
                    string("PXT_ACCESS_TOKEN", "pxt_access_token")
                    string("PXT_RELEASE_REPO", "pxt_release_repo_adafruit-metro")
                }
            }
        }
    }

    Utilities.setMachineAffinity(newJob, "Ubuntu", "20161020")
    InternalUtilities.standardJobSetup(newJob, project, isPR, "*/*")

    if (isPR) {
        Utilities.addGithubPRTrigger(newJob, "Default Testing")
    } else {
        Utilities.addGithubPushTrigger(newJob)
    }
}
