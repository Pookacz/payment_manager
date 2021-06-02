import React from "react";
import styles from "./Form.module.scss";
import BudgetForm from "../BudgetForm/BudgetForm";
import { connect } from "react-redux";
import { addItem } from "../../actions";

class Form extends React.Component {
  state = {
    id: "",
    title: "",
    cost: "",
    costType: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSelect = (e) => {
    console.log(e.target.value);
    this.setState({
      costType: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      id: this.state.title,
      title: "",
      cost: "",
    });
  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Add New</h1>
          <form
            onSubmit={this.handleSubmit}
            className={styles.form}
            autoComplete="off"
          >
            <input
              className={styles.inputTitle}
              type="text"
              name="title"
              placeholder="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <input
              className={styles.inputCost}
              type="number"
              name="cost"
              placeholder="cost"
              onChange={this.handleChange}
              value={this.state.cost}
            />
            <select
              onChange={this.handleSelect}
              value={this.state.value}
              className={styles.inputSelect}
              defaultValue={"Select"}
            >
              <option value="Select" disabled hidden>
                Select
              </option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Accessories">Accessories</option>
              <option value="Subscription">Subscription</option>
              <option value="Bill">Bill</option>
              <option value="Other">Other</option>
            </select>
            <input
              className={styles[`submit${this.state.costType}`]}
              type="submit"
              value="Add."
              disabled={this.state.costType === "" ? true : false}
            />
          </form>
          <BudgetForm />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (title, cost, costType) =>
      dispatch(addItem(title, cost, costType)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
