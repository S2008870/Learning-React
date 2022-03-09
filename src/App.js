
  
import React from "react";
import "./style.css";
function AddressFilter() {
return (
<div>
<input type="text" />
<button>Sök</button>
</div>
)
}
function AddressList() {
return (
<table>
<thead>
<tr>
<th>Förnamn</th>
<th>Efternamn</th>
<th>Telefon</th>
<th>E-post</th>
</tr>
</thead>
<tbody>
<tr>
<td>Anne</td>
<td>Brewitt</td>
<td>504-635-8214</td>
<td>abrewitt0@jigsy.com</td>
</tr>
<tr>
<td>Chrissie</td>
<td>Mould</td>
<td>182-606-6856</td>
<td>cmould1@so-net.ne.jp</td>
</tr>
<tr>
<td>Flinn</td>
<td>Danne</td>
<td>831-256-0219</td>
<td>fdanne2@people.com.cn</td>
</tr>
<tr>
<td>Chelsie</td>
<td>Holah</td>
<td>242-147-0958</td>
<td>cholah3@infoseek.co.jp</td>
</tr>
</tbody>
</table>
)
}
export default function App() {
return (
<div>
<h1>Kontakter</h1>
<AddressFilter />
<AddressList />
</div>
);
}