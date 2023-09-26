class F8 {
  static component(name, options) {
    class CustomEl extends HTMLElement {
      constructor() {
        super();
        this.data = options;
        this.attachShadow({ mode: "open" });
        this.render();
      }

      render() {
        const ShadowRoot = this.shadowRoot;
        const templateEl = document.createElement("template");
        templateEl.innerHTML = this.data.template;
        ShadowRoot.appendChild(templateEl.content.cloneNode(true));
        // console.log(templateEl.content.cloneNode(true));

        console.log(this.data.template);
        const html = this.data.template;
        const regex = /{{.+?}}/g;
        const results = html.match(regex);
        console.log(results);

        Object.keys(this.data.data()).forEach((key) => {
          window[key] = this.data.data()[key];
        });

        console.log(count);
        console.log(title);
        //style h1

        if (results) {
          //style h1
          var h1 = ShadowRoot.querySelector("h1");

          h1.style.color = "blue";
          h1.style.fontSize = "50px";
          h1.style.textAlign = "center";
          h1.innerText = title;

          //style h2
          var h2 = ShadowRoot.querySelector("h2");
          h2.style.color = "red";
          h2.style.fontSize = "30px";
          h2.style.textAlign = "center";
          //style button

          h2.innerText = count;
        }

        const btn = ShadowRoot.querySelectorAll("button");
        btn.forEach((item) => {
          item.style.padding = "10px";
          item.style.margin = "10px";
          item.style.borderRadius = "10px";
          item.style.backgroundColor = "green";
          item.style.color = "white";
          item.style.fontSize = "20px";

          const checkClick = item.getAttribute("v-on:click");
          if (checkClick === "count--") {
            item.addEventListener("click", () => {
              if (count > 0) {
                count--;
                h2.innerText = count;
              } else {
                count--;
                h2.innerText = count;
                h1.innerText = "Vịt rơi rồi bạn ơi :(";
                alert("Vịt rơi rồi bạn ơi :(");
              }
            });
          }
          if (checkClick === "count++") {
            item.addEventListener("click", () => {
              count++;
              h2.innerText = count;
              if (count >= 0) {
                h1.innerText = "Mua vịt đi bà con ơi !!!";
              }
            });
          }
          if (checkClick === "title") {
            item.addEventListener("click", () => {
              if (count > 0) {
                h1.innerText = `Vịt đã được thanh toán ${count} con`;
                h2.innerText = "0";
                count = 0;
              }
            });
          }
          if (checkClick === "f5") {
            item.addEventListener("click", () => {
              location.reload();
            });
          }
        });
      }
    }
    customElements.define(name, CustomEl);
  }
}

F8.component("f8-counter", {
  data: () => {
    return {
      count: 0,
      title: "Mua vịt đi bà con ơi !!!",
    };
  },
  template: `
          <h1>{{ title }}</h1>
          <h2>Counted: <span class="count-span">{{ count }}</span> times</h2>
          <div>
          <button v-on:click="count--">Vứt vịt ra đường</button>
          <button v-on:click="count++">Bỏ vịt vào giỏ</button>
          <button v-on:click="title">Thanh toán đi bro</button>
          <button v-on:click="f5">Mua lại vịt</button>
          </div>
        `,
});
