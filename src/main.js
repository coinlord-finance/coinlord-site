import { Application } from '../node_modules/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/13AtQ2p3yfdQ2iqA/scene.spline');
