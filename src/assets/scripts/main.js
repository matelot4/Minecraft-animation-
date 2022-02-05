
$(document).ready(function () {

  $(".animate__animated").appear();

  $(".animation-scroll").on("appear", function () {
    let elem = $(this);
    let animation = elem.data("animation");
    let animationDelay = elem.data("animation-delay");

    if (animationDelay) {
      window.setTimeout(function () {
        elem.addClass(`animate__${animation}`);
      }, animationDelay);
    } else {
      elem.addClass(`animate__${animation}`);
    }
    
  });
});

const modale = document.getElementById("modale");
const boutonOuvrir = document.querySelector(".chest");
const boutonFermer = document.querySelector(".fermer-modale");

boutonOuvrir.addEventListener("click", function () {
  modale.style.display = "block";
});

boutonFermer.addEventListener("click", function () {
  modale.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modale) {
    modale.style.display = "none";
  }
};

const canvas = document.getElementById("dessin");
const context = canvas.getContext("2d");

function dessinerMonCanvas() {
  context.fillStyle = "#1AA709";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.rect(30, 40, 80, 40);
  context.fillStyle = "#000000";
  context.fill();

  context.beginPath();
  context.rect(190, 40, 80, 40);
  context.fillStyle = "#000000";
  context.fill();

  context.beginPath();
  context.rect(110, 80, 80, 40);
  context.fillStyle = "#000000";
  context.fill();

  context.beginPath();
  context.rect(55, 100, 190, 40);
  context.fillStyle = "#000000";
  context.fill();

  context.beginPath();
  context.rect(55, 120, 30, 40);
  context.fillStyle = "#000000";
  context.fill();

  context.beginPath();
  context.rect(215, 120, 30, 40);
  context.fillStyle = "#000000";
  context.fill();
}

dessinerMonCanvas();

const dessinerMonTableau = () => {
  data = [40, 55, 75, 91, 131];

  new RGraph.SVG.Line({
    id: "tableau",
    data: data,
    options: {
      backgroundGridVlines: false,
      backgroundGridBorder: false,
      colors: ["#1AA709"],
      xaxis: false,
      yaxis: false,
      yaxisScaleUnitsPost: "M", //M
      xaxisLabels: ["2016", "2017", "2018", "2019", "2020"],
      years: ["2016", "2017", "2018", "2019", "2020"],
      tooltips: "<b>%{property:years[%{index}]}: %{value}%</b>",
      tooltipsCss: {
        backgroundColor: "#333",
        fontWeight: "bold",
        fontSize: "14pt",
        opacity: 0.85,
      },
      linewidth: 3,
      marginTop: 45,
      marginLeft: 25,
      marginLeft: 40,
      spline: true,
      filled: true,
      filledOpacity: 0.5,
      filledAccumulative: true,
      linewidth: 0,
      title: "Joueurs mensuellement actifs sur Minecraft",
      titleSubtitle: "Depuis la création du jeu",
      titleSubtitleColor: "black",
    },
  })
    .draw()
    .responsive([
      {
        maxWidth: null,
        width: 700,
        height: 500,
        options: {
          titleSize: 18,
          textSize: 12,
          xaxisLabelsOffsety: 0,
          marginBottom: 40,
          marginInner: 25,
        },
      },
      {
        maxWidth: 1440,
        width: 525,
        height: 400,
        options: {
          titleSize: 14,
          textSize: 10,
          xaxisLabelsOffsety: 0,
          marginBottom: 30,
          marginInner: 20,
        },
      },
      {
        maxWidth: 600,
        width: 400,
        height: 300,
        options: {
          titleSize: 11,
          xaxisLabelsOffsety: 7,
          marginBottom: 40,
          textSize: 10,
          marginInner: 15,
        },
      },
    ]);
};

dessinerMonTableau();
