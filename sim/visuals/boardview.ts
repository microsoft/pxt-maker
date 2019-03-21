namespace pxsim.visuals {
    mkBoardView = (opts: pxsim.visuals.BoardViewOptions): BoardView => {
        return new visuals.MetroBoardSvg({
            runtime: runtime,
            theme: visuals.randomTheme(),
            visualDef: opts.visual as BoardImageDefinition,
            boardDef: opts.boardDef,
            disableTilt: false,
            wireframe: opts.wireframe
        });
    }
}