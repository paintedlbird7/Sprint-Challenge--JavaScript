 class CuboidMaker {
    // Step 2: Create a new constructor
constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;   
}    // Step 3: Methods
volume() {
    return this.length * this.width * this.height;
// return `${this.name} was removed from the game`;
}  // end of class
surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// return `${this.name} was removed from the game`;
}  // end of class
}
 
 
  const cuboid = new CuboidMaker ({
    // dimensions: {
      length: 4,
      width: 5,
      height: 5,
    // },
  });
  
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.