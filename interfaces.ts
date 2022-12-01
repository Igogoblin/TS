interface Rect {
 readonly id: string;
 color?: string;
 size: {
  width: number;
  height: number;
 }
}

const rect1: Rect = {
  id: '1234',
  size:{
    width:20,
    height:30
  },
  color: '#ccc'
}

interface RectWith extends Rect {
  getArea: () => number;
}

const rect5: RectWith = {
  id: '123',
  size: {
    height: 20,
    width: 20
  },
  getArea(): number {
    return this.size.width* this.size.height;
  },
}

interface IClock {
  time: Date,
  setTime(date: Date):void
}

class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date;
  }
}

const css = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '3px'
}