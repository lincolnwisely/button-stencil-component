import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'lincoln-button',
  styleUrl: 'lincoln-button.css',
  shadow: true
})
export class LincolnButton {

  /**
   * The message
   */
  @Prop() message: string;

  /**
   * The button's background color
   */
  @Prop() bgColor: string;

  /**
   * The button's border radius
   */
  @Prop() borderRadius: string;

  /**
   * The button's text color
   */
  @Prop() txtColor: string;

  /**
   * The button's width
   */
  @Prop() width: string;

  /**
   * The button's padding
   */
  @Prop() padding: string;

  render() {
    return (
      <button 
      style={{
        width: this.width,
        padding: this.padding,
        backgroundColor: this.bgColor,
        color: this.txtColor,
        borderRadius: this.borderRadius,
      }}
      >
      {this.message}
      </button>
    )  
  }
}
