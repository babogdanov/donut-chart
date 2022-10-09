import { DonutSlice } from "../DonutChart/DonutChart";



interface DonutSliceWithCommands extends DonutSlice {
    offset: number;
    commands: string;
  }
  
class CalculusHelper {
    data: DonutSlice[];
    radius: number;
    viewBox: number;
    borderSize:number;

    constructor(data: DonutSlice[], radius: number, viewBox: number, borderSize: number) {
        this.data = data
        this.radius = radius
        this.viewBox = viewBox
        this.borderSize = borderSize
    }

    getSlicesWithCommandsAndOffsets(): DonutSliceWithCommands[] {
      let previousPercent = 0;
      return this.data.map((slice) => {
        const sliceWithCommands: DonutSliceWithCommands = {
          ...slice,
          commands: this.getSliceCommands(slice),
          offset: previousPercent * 3.6 * -1,
        };
        previousPercent += slice.percent;
        return sliceWithCommands;
      });
    }
  
    getSliceCommands(
      donutSlice: DonutSlice,
    ): string {
      const degrees = this.percentToDegrees(donutSlice.percent);
      const longPathFlag = degrees > 180 ? 1 : 0;
      const innerRadius = this.radius - this.borderSize;
  
      const commands: string[] = [];
      commands.push(`M ${this.viewBox / 2 + this.radius} ${this.viewBox / 2 }`);
      commands.push(
        `A ${this.radius} ${this.radius} 0 ${longPathFlag} 0 ${this.getCoordFromDegrees(
          degrees,
          this.radius,
        )}`
      );
      commands.push(
        `L ${this.getCoordFromDegrees(degrees, innerRadius)}`
      );
      commands.push(
        `A ${innerRadius} ${innerRadius} 0 ${longPathFlag} 1 ${
            this.viewBox / 2 + innerRadius
        } ${this.viewBox / 2 }`
      );
      return commands.join(' ');
    }
  
    getCoordFromDegrees(angle: number, radius: number): string {
      const x = Math.cos((angle * Math.PI) / 180);
      const y = Math.sin((angle * Math.PI) / 180);
      const coordX = x * radius + this.viewBox / 2;
      const coordY = y * -radius + this.viewBox / 2;
      return [coordX, coordY].join(' ');
    }
  
    percentToDegrees(percent: number): number {
      return percent * 3.6;
    }
  }

  export default CalculusHelper