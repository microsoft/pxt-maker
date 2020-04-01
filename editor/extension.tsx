/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtblocks.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtcompiler.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
import * as React from "react";

function showUploadInstructionsAsync(fn: string, url: string, confirmAsync: (options: any) => Promise<number>) {
    const boardName = pxt.appTarget.appTheme.boardName || "???";
    const boardDriveName = pxt.appTarget.appTheme.driveDisplayName || pxt.appTarget.compile.driveName || "???";

    // https://msdn.microsoft.com/en-us/library/cc848897.aspx
    // "For security reasons, data URIs are restricted to downloaded resources.
    // Data URIs cannot be used for navigation, for scripting, or to populate frame or iframe elements"
    const userDownload = pxt.BrowserUtils.isBrowserDownloadWithinUserContext();
    const downloadAgain = !pxt.BrowserUtils.isIE() && !pxt.BrowserUtils.isEdge();
    const docUrl = pxt.appTarget.appTheme.usbDocs;


    const body =
        userDownload
            ? lf("Click 'Download' to open the {0} app.", pxt.appTarget.appTheme.boardName || "")
            : undefined;

    const jsx = !userDownload ?
        <div className="ui three column grid stackable">
            <div className="column">
                <div className="ui">
                    <div className="content">
                        <div className="description">
                            <span className="ui blue circular label">1</span>
                            {lf("Take the USB cable you connected to your computer. Plug it into your {0}.", boardName)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="ui">
                    <div className="content">
                        <div className="description">
                            <span className="ui blue circular label">2</span>
                            {lf("Press the RESET button to go into programming mode. When the lights turn green, you're ready to go.")}
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="ui">
                    <div className="content">
                        <div className="description">
                            <span className="ui blue circular label">3</span>
                    ${lf("Click and drag the file you downloaded onto {0}.", boardDriveName)}
                        </div>
                    </div>
                </div>
            </div>
        </div> : undefined;

    const buttons: any[] = [];

    if (downloadAgain) {
        buttons.push({
            label: userDownload ? lf("Download") : fn,
            icon: "download",
            class: `${userDownload ? "primary" : "lightgrey"}`,
            url,
            fileName: fn
        });
    }

    if (docUrl) {
        buttons.push({
            label: lf("Help"),
            icon: "help",
            className: "lightgrey",
            url: docUrl
        });
    }

    return confirmAsync({
        header: lf("Download to your {0}", pxt.appTarget.appTheme.boardName),
        body,
        jsx,
        hasCloseIcon: true,
        hideCancel: true,
        hideAgree: true,
        className: 'downloaddialog',
        buttons
        //timeout: 20000
    }).then(() => { });
}

pxt.editor.initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
    pxt.debug('loading pxt-maker target extensions...')
    const res: pxt.editor.ExtensionResult = {
        showUploadInstructionsAsync
    };
    return Promise.resolve<pxt.editor.ExtensionResult>(res);
}
