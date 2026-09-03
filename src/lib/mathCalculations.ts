/**
 * Math Calculation Engine - Pure computation separated from UI rendering
 */

export interface Point2D {
  x: number;
  y: number;
}

export interface TriangleProperties {
  sideA: number; // BC
  sideB: number; // CA
  sideC: number; // AB
  angleA: number; // in degrees
  angleB: number; // in degrees
  angleC: number; // in degrees
  area: number;
  perimeter: number;
  circumradius: number; // R
  inradius: number;     // r
  centroid: Point2D;
  orthocenter: Point2D;
  circumcenter: Point2D;
  incenter: Point2D;
}

export function distance(p1: Point2D, p2: Point2D): number {
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
}

export function calculateTriangleProperties(A: Point2D, B: Point2D, C: Point2D): TriangleProperties {
  const a = distance(B, C);
  const b = distance(C, A);
  const c = distance(A, B);

  // Cosine theorem for angles
  const cosA = Math.max(-1, Math.min(1, (b * b + c * c - a * a) / (2 * b * c)));
  const cosB = Math.max(-1, Math.min(1, (a * a + c * c - b * b) / (2 * a * c)));
  const cosC = Math.max(-1, Math.min(1, (a * a + b * b - c * c) / (2 * a * b)));

  const angleA = (Math.acos(cosA) * 180) / Math.PI;
  const angleB = (Math.acos(cosB) * 180) / Math.PI;
  const angleC = (Math.acos(cosC) * 180) / Math.PI;

  const p = (a + b + c) / 2; // Semi-perimeter
  const area = Math.sqrt(Math.max(0, p * (p - a) * (p - b) * (p - c)));
  const perimeter = a + b + c;

  const R = area > 0 ? (a * b * c) / (4 * area) : 0;
  const r = area > 0 ? area / p : 0;

  // Centroid (Trọng tâm G)
  const centroid: Point2D = {
    x: (A.x + B.x + C.x) / 3,
    y: (A.y + B.y + C.y) / 3,
  };

  // Incenter (Tâm đường tròn nội tiếp I)
  const incenter: Point2D = {
    x: (a * A.x + b * B.x + c * C.x) / perimeter,
    y: (a * A.y + b * B.y + c * C.y) / perimeter,
  };

  // Circumcenter (Tâm đường tròn ngoại tiếp O)
  const D = 2 * (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
  let circumcenter: Point2D = { x: 0, y: 0 };
  if (Math.abs(D) > 1e-6) {
    circumcenter = {
      x: ((A.x * A.x + A.y * A.y) * (B.y - C.y) + (B.x * B.x + B.y * B.y) * (C.y - A.y) + (C.x * C.x + C.y * C.y) * (A.y - B.y)) / D,
      y: ((A.x * A.x + A.y * A.y) * (C.x - B.x) + (B.x * B.x + B.y * B.y) * (A.x - C.x) + (C.x * C.x + C.y * C.y) * (B.x - A.x)) / D,
    };
  }

  // Orthocenter (Trực tâm H): Vector relation OH = 3 OG => H = 3G - 2O (Euler Line)
  const orthocenter: Point2D = {
    x: 3 * centroid.x - 2 * circumcenter.x,
    y: 3 * centroid.y - 2 * circumcenter.y,
  };

  return {
    sideA: a,
    sideB: b,
    sideC: c,
    angleA,
    angleB,
    angleC,
    area,
    perimeter,
    circumradius: R,
    inradius: r,
    centroid,
    orthocenter,
    circumcenter,
    incenter,
  };
}

/**
 * Quadratic function evaluation: f(x) = ax^2 + bx + c
 */
export function evaluateQuadratic(a: number, b: number, c: number, x: number): number {
  return a * x * x + b * x + c;
}

export function getQuadraticKeyPoints(a: number, b: number, c: number) {
  const delta = b * b - 4 * a * c;
  const vertex: Point2D = {
    x: -b / (2 * a),
    y: -delta / (4 * a),
  };

  let roots: number[] = [];
  if (delta > 0) {
    roots = [(-b + Math.sqrt(delta)) / (2 * a), (-b - Math.sqrt(delta)) / (2 * a)].sort((m, n) => m - n);
  } else if (Math.abs(delta) < 1e-7) {
    roots = [-b / (2 * a)];
  }

  return {
    delta,
    vertex,
    roots,
    yIntercept: c,
    axisOfSymmetry: -b / (2 * a),
  };
}