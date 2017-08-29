PShape tileSide;
PShape tileLine;
PShape tileEmpty;
final color BLUE = #0069B1;
final color WHITE = #ffffff;
final int SIDE = 2;
final int LINE = 1;
final int NOPE = 0;
final int[][] kind = {
  { SIDE, LINE, SIDE, LINE },
  { LINE, NOPE, SIDE, SIDE },
  { SIDE, LINE, LINE, SIDE }
};
final float[][] rotations = {
  { 0, 90, 0, 90 },
  { 0, 0, -90, 90 },
  { -90, -90, -90, 180 }
};


void setup() {
  size(500, 400);
  shapeMode(CENTER);

  // Creating empty shape
  color nothing = 0x00000000;

  tileSide = createShape(GROUP);
  PShape side = createShape(RECT, -45, -45, 90, 90);
  side.setFill(WHITE);
  side.setStroke(nothing);
  PShape border = createShape(TRIANGLE, -22.5, 45, 45, -22.5, 45, 45);
  border.setFill(BLUE);
  border.setStroke(nothing);
  tileSide.addChild(side);
  tileSide.addChild(border);

  tileLine = createShape(GROUP);
  PShape back = createShape(RECT, -45, -45, 90, 90);
  back.setFill(BLUE);
  back.setStroke(nothing);
  PShape front = createShape(RECT, -45, -45, 22.5, 90);
  front.setFill(WHITE);
  front.setStroke(nothing);
  tileLine.addChild(back);
  tileLine.addChild(front);

  tileEmpty = createShape(RECT, -45, -45, 90, 90);
  tileEmpty.setFill(WHITE);
  tileEmpty.setStroke(nothing);
}

void draw() {
  PShape current;

  background(#000000);
  for (int y = 0; y < 3; ++y) {
    for (int x = 0; x < 4; ++x) {
      float rotation = radians(rotations[y][x]);
      switch (kind[y][x]) {
        case SIDE:
          current = tileSide;
        break;
        case LINE:
          current = tileLine;
        break;
        default:
          current = tileEmpty;
      }
      current.rotate(rotation);
      shape(current, 100*(x+1), 100*(y+1));
      current.rotate(-rotation);
    }
  }

  save("cs.png");
  noLoop();
}
