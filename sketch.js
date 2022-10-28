let img

function preload() {
  img = loadImage('https://source.unsplash.com/random')
}

function setup() {
  createCanvas(img.width, img.height)
  frameRate(5)
  background(255, 238, 0)
  //noLoop()
  img.filter(GRAY)
  for(let col=0; col<img.width; col+=20) {
    for(let row=0; row<img.height; row+=20) {
      let c = img.get(col,row);
       {stroke(color(c))}
      strokeWeight(10)
      circle(col,row, 10)
    }
  }
}

function savePNG() {
  save('youthyouth-image.png')
}
Footer
