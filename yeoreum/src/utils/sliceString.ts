type Text = string;
type Limit = number;

export default function sliceString(text: Text, limitLength: Limit) {
  if (text.length <= limitLength) return text;
  else return text.substring(0, limitLength) + '...';
}
