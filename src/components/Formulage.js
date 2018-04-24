import React, { Component } from "react";

class Formulage extends Component {
  state = {
    leukocyty: 0,
    erytrocyty: 0,
    hemoglobina: 0,
    hematokryt: 0,
    mcv: 0,
    mch: 0,
    płytki: 0,
    płytkiObj: 0,
    neurocyty: 0,
    limfocyty: 0
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log("wysłano waidomość email");
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <label className="form__label">
            Leukocyty
            <span className="form__value">{this.state.leukocyty}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="leukocyty"
            value={this.state.leukocyty}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Erytrocyty
            <span className="form__value">{this.state.erytrocyty}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="erytrocyty"
            value={this.state.erytrocyty}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Hemoglobina
            <span className="form__value">{this.state.hemoglobina}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="hemoglobina"
            value={this.state.hemoglobina}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Hematokryt
            <span className="form__value">{this.state.hematokryt}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="hematokryt"
            value={this.state.hematokryt}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Śr. obj. erytrocytów (MCV)
            <span className="form__value">{this.state.mcv}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="mcv"
            value={this.state.mcv}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Śr. zawartość HGB w erytrocytach (MCH)
            <span className="form__value">{this.state.mch}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="mch"
            value={this.state.mch}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Płytki krwi
            <span className="form__value">{this.state.płytki}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="płytki"
            value={this.state.płytki}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Śr. obj. płytek krwi
            <span className="form__value">{this.state.płytkiObj}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="płytkiObj"
            value={this.state.płytkiObj}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Neurocyty
            <span className="form__value">{this.state.neurocyty}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="neurocyty"
            value={this.state.neurocyty}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label">
            Limfocyty
            <span className="form__value">{this.state.limfocyty}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            name="limfocyty"
            value={this.state.limfocyty}
            onChange={this.handleChange}
          />
        </div>

        <div className="form__group">
          <input className="form__submit" type="submit" value="Zobacz wynik" />
        </div>
      </form>
    );
  }
}

export default Formulage;
