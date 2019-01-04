import KoiApp from '../app/koi-app'

class Player {

    private app: KoiApp;
    private m_width: number = 480;
    private m_height: number = 800;
    private m_container: HTMLElement;

    public canvas: PIXI.Container;

    constructor() {

    }

    public init(app: KoiApp, container_id: string) {
        this.app = app;

        const container = document.getElementById(container_id);
        if (!container) {
            console.error(`cant found container '${container_id}'.`);
            return;
        }
        this.m_container = container;

        PIXI.utils.skipHello();
        this.app.pixi = new PIXI.Application(document.body.clientWidth, document.body.clientHeight, { autoResize: true });
        this.m_container.appendChild(this.app.pixi.view);

        this.canvas = new PIXI.Container;
        this.app.pixi.stage.addChild(this.canvas);

        this.onResize();
        window.onresize = () => {
            this.app.pixi.renderer.resize(document.body.clientWidth, document.body.clientHeight);
            this.onResize();
        }
    }

    private onResize(): void {
        const screenHeight = document.body.clientHeight, designHeight = this.m_height;
        let scale = screenHeight / designHeight;
        this.canvas.scale = new PIXI.Point(scale, scale);
    }

}

export default Player