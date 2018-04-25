# Hasty 
> Automatically Create Presentations From Any Article 

1. Enter the URL
2. Choose the presentation Length:
3. Confirm the headings
4. Add Images / Data
5. Edit Final Presentation
6. Export to PDF, PowerPoint, Keynote ect.

## Relevent Research

* [salesforce](https://einstein.ai/research/your-tldr-by-an-ai-a-deep-reinforced-model-for-abstractive-summarization)
* https://www.summarizebot.com/
* Pre filled presentations with slides.com - [Define API](https://slides.com/developers#define-api)

## Usage

Put the following in a `.env` file

```env
APIKEY="734hYOURKEYfhdsj"
```

Then 

```shell
node main https://gradireland.com/careers-advice/job-descriptions/software-engineer  > presentation/js/main.js
```

and the presentation will be in the `presentation` folder
