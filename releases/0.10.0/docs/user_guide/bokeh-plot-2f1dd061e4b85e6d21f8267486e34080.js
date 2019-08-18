(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_lib(url, callback){
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading){
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = true;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = function(){
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.js"

  var elt = document.getElementById("b2fd3a34-bdea-42f1-86b5-c5296e9d354a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b2fd3a34-bdea-42f1-86b5-c5296e9d354a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "c2298bb5-6373-4e34-b7b9-041b4f7e6046"}, "type": "Rect", "id": "c2298bb5-6373-4e34-b7b9-041b4f7e6046"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "778d2071-deb8-4833-83ff-6f1769b88df6"}, "type": "Rect", "id": "778d2071-deb8-4833-83ff-6f1769b88df6"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "de2a7778-ad84-4f64-b71a-f455a11a3be7"}, "type": "Rect", "id": "de2a7778-ad84-4f64-b71a-f455a11a3be7"}, {"attributes": {"end": 63.800000000000004, "callback": null, "doc": null, "tags": [], "start": 0.0, "id": "b026d7ef-0b6b-45a0-8733-f9ecb0b5d3d6"}, "type": "Range1d", "id": "b026d7ef-0b6b-45a0-8733-f9ecb0b5d3d6"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [13.0], "width": [3.1499999999999986], "y": [6.5], "x": [10.55]}, "id": "8777514e-00ad-4a47-b1e6-1f2f9fb32d3c"}, "type": "ColumnDataSource", "id": "8777514e-00ad-4a47-b1e6-1f2f9fb32d3c"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [10.0], "width": [3.1499999999999986], "y": [5.0], "x": [38.75]}, "id": "ff86ad06-8f78-4270-b9ca-6260faf420d6"}, "type": "ColumnDataSource", "id": "ff86ad06-8f78-4270-b9ca-6260faf420d6"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "ac598d59-cfc9-4512-b443-83cac4533495"}, "type": "ToolEvents", "id": "ac598d59-cfc9-4512-b443-83cac4533495"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "92f6a4fd-20e4-475c-be83-1796eb9b22d0"}, "tags": [], "doc": null, "selection_glyph": null, "id": "ac6ace88-5e12-4fbc-a219-f13d1f914faa", "glyph": {"type": "Rect", "id": "ac2b958e-4fdb-47d8-b046-5bebfb888b6a"}}, "type": "GlyphRenderer", "id": "ac6ace88-5e12-4fbc-a219-f13d1f914faa"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "7fcfa83d-2098-4d31-a702-ce73e40b53ab"}, "type": "Rect", "id": "7fcfa83d-2098-4d31-a702-ce73e40b53ab"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f"}, "tags": [], "doc": null, "id": "c49cf3c7-fdd9-43e3-8c41-7e473ec78c8e"}, "type": "HelpTool", "id": "c49cf3c7-fdd9-43e3-8c41-7e473ec78c8e"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "953a0131-da18-44a3-8416-15ebc5717588"}, "tags": [], "doc": null, "selection_glyph": null, "id": "df630bff-670b-4bae-bf32-fb6def08bfba", "glyph": {"type": "Rect", "id": "5995de68-8cca-4e60-9f91-23613e2662d7"}}, "type": "GlyphRenderer", "id": "df630bff-670b-4bae-bf32-fb6def08bfba"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "4f28da13-3834-430f-894d-1ea588a58b7e"}, "tags": [], "doc": null, "selection_glyph": null, "id": "b6270692-5c4b-4d96-9232-874d240b60b7", "glyph": {"type": "Rect", "id": "0cb31797-92cd-40be-9d17-edfaa724ac04"}}, "type": "GlyphRenderer", "id": "b6270692-5c4b-4d96-9232-874d240b60b7"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "248ec2a4-a00e-42f0-9d25-09ce5efeef3b"}, "tags": [], "doc": null, "selection_glyph": null, "id": "5b5efa86-eae0-42e0-8b20-b6e872622cea", "glyph": {"type": "Rect", "id": "d0725dd9-ac7b-4ad8-8307-a3f9665db6fc"}}, "type": "GlyphRenderer", "id": "5b5efa86-eae0-42e0-8b20-b6e872622cea"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f"}, "tags": [], "doc": null, "id": "02e5dd95-edb2-4cf3-9c46-1b3610331e16"}, "type": "ResetTool", "id": "02e5dd95-edb2-4cf3-9c46-1b3610331e16"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f"}, "tags": [], "doc": null, "axis_label": "Count( Mpg )", "formatter": {"type": "BasicTickFormatter", "id": "01dd581a-2e54-4ab0-a1c9-87d8175b7428"}, "ticker": {"type": "BasicTicker", "id": "4f62db88-9c43-4957-a9bb-fbc3087a2522"}, "id": "6cbbfa45-1dd3-4018-9a86-ca9a85d548fe"}, "type": "LinearAxis", "id": "6cbbfa45-1dd3-4018-9a86-ca9a85d548fe"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "ff86ad06-8f78-4270-b9ca-6260faf420d6"}, "tags": [], "doc": null, "selection_glyph": null, "id": "f08364aa-504a-4b90-a928-d67d25391143", "glyph": {"type": "Rect", "id": "88c032db-4271-471a-b80a-9fe5e5d3e6d0"}}, "type": "GlyphRenderer", "id": "f08364aa-504a-4b90-a928-d67d25391143"}, {"attributes": {"end": 49.405, "callback": null, "doc": null, "tags": [], "start": 6.195000000000001, "id": "d37fad7b-1aaf-413b-8df2-b230497da653"}, "type": "Range1d", "id": "d37fad7b-1aaf-413b-8df2-b230497da653"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "0cb31797-92cd-40be-9d17-edfaa724ac04"}, "type": "Rect", "id": "0cb31797-92cd-40be-9d17-edfaa724ac04"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "4f62db88-9c43-4957-a9bb-fbc3087a2522"}, "id": "6982ff10-9d0c-47c0-abc3-5cb150bab38e"}, "type": "Grid", "id": "6982ff10-9d0c-47c0-abc3-5cb150bab38e"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "5995de68-8cca-4e60-9f91-23613e2662d7"}, "type": "Rect", "id": "5995de68-8cca-4e60-9f91-23613e2662d7"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "1e13cd88-90e0-46a9-b432-2d85c9bb8164"}, "type": "WheelZoomTool", "id": "1e13cd88-90e0-46a9-b432-2d85c9bb8164"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "254b70bf-db63-4a7b-b3af-0866f10ebb73"}, "tags": [], "doc": null, "selection_glyph": null, "id": "184c27e2-cfe2-461c-8583-3e97dac26749", "glyph": {"type": "Rect", "id": "7fcfa83d-2098-4d31-a702-ce73e40b53ab"}}, "type": "GlyphRenderer", "id": "184c27e2-cfe2-461c-8583-3e97dac26749"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "b0b08036-123d-4b93-a27b-dc6ca6acf92c"}, "tags": [], "doc": null, "selection_glyph": null, "id": "4901d6a5-0b4a-463c-934f-6317280c9b4f", "glyph": {"type": "Rect", "id": "de2a7778-ad84-4f64-b71a-f455a11a3be7"}}, "type": "GlyphRenderer", "id": "4901d6a5-0b4a-463c-934f-6317280c9b4f"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [44.0], "width": [3.1499999999999986], "y": [22.0], "x": [23.1]}, "id": "254b70bf-db63-4a7b-b3af-0866f10ebb73"}, "type": "ColumnDataSource", "id": "254b70bf-db63-4a7b-b3af-0866f10ebb73"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "88c032db-4271-471a-b80a-9fe5e5d3e6d0"}, "type": "Rect", "id": "88c032db-4271-471a-b80a-9fe5e5d3e6d0"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "8777514e-00ad-4a47-b1e6-1f2f9fb32d3c"}, "tags": [], "doc": null, "selection_glyph": null, "id": "13d14b5d-6136-4432-afda-89605ac9ea13", "glyph": {"type": "Rect", "id": "49d3ef8d-5ccc-4ff8-b57c-136d1bd7d1de"}}, "type": "GlyphRenderer", "id": "13d14b5d-6136-4432-afda-89605ac9ea13"}, {"attributes": {"doc": null, "id": "8f76139d-cc01-4e5e-a2a3-b0f89c8b5f10", "tags": []}, "type": "BasicTickFormatter", "id": "8f76139d-cc01-4e5e-a2a3-b0f89c8b5f10"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "eb57e76c-77a2-445d-a8d2-fb2042abb646"}, "tags": [], "doc": null, "selection_glyph": null, "id": "da3e6fd5-9826-4e03-8210-56bb146e8ca8", "glyph": {"type": "Rect", "id": "c2298bb5-6373-4e34-b7b9-041b4f7e6046"}}, "type": "GlyphRenderer", "id": "da3e6fd5-9826-4e03-8210-56bb146e8ca8"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "f98fdd1f-8d3a-463b-9ce9-88a2499c4bd3"}, "type": "Rect", "id": "f98fdd1f-8d3a-463b-9ce9-88a2499c4bd3"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [38.0], "width": [3.1499999999999986], "y": [19.0], "x": [29.35]}, "id": "ade636b7-497f-453b-8695-962121b2761d"}, "type": "ColumnDataSource", "id": "ade636b7-497f-453b-8695-962121b2761d"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "8f3a4671-88b4-4dd0-8127-a8a98f7aa026"}, "tags": [], "doc": null, "selection_glyph": null, "id": "e89c5e6f-f527-4337-9379-faec126369a1", "glyph": {"type": "Rect", "id": "2fd41667-8adc-4a2e-9c40-7d5e7a410d0b"}}, "type": "GlyphRenderer", "id": "e89c5e6f-f527-4337-9379-faec126369a1"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "2fd41667-8adc-4a2e-9c40-7d5e7a410d0b"}, "type": "Rect", "id": "2fd41667-8adc-4a2e-9c40-7d5e7a410d0b"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [49.0], "width": [3.1499999999999986], "y": [24.5], "x": [26.25]}, "id": "b0b08036-123d-4b93-a27b-dc6ca6acf92c"}, "type": "ColumnDataSource", "id": "b0b08036-123d-4b93-a27b-dc6ca6acf92c"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [58.0], "width": [3.1499999999999986], "y": [29.0], "x": [16.85]}, "id": "1855c6f6-3fcc-4fc9-b938-45fe16de7ec1"}, "type": "ColumnDataSource", "id": "1855c6f6-3fcc-4fc9-b938-45fe16de7ec1"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "49d3ef8d-5ccc-4ff8-b57c-136d1bd7d1de"}, "type": "Rect", "id": "49d3ef8d-5ccc-4ff8-b57c-136d1bd7d1de"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "11578a10-affd-43c6-97f4-6d83fa34623a"}, "type": "BoxZoomTool", "id": "11578a10-affd-43c6-97f4-6d83fa34623a"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "ade636b7-497f-453b-8695-962121b2761d"}, "tags": [], "doc": null, "selection_glyph": null, "id": "a20e42a8-3017-4c43-b0af-b8c7cc062569", "glyph": {"type": "Rect", "id": "778d2071-deb8-4833-83ff-6f1769b88df6"}}, "type": "GlyphRenderer", "id": "a20e42a8-3017-4c43-b0af-b8c7cc062569"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "d0725dd9-ac7b-4ad8-8307-a3f9665db6fc"}, "type": "Rect", "id": "d0725dd9-ac7b-4ad8-8307-a3f9665db6fc"}, {"attributes": {"doc": null, "id": "01dd581a-2e54-4ab0-a1c9-87d8175b7428", "tags": []}, "type": "BasicTickFormatter", "id": "01dd581a-2e54-4ab0-a1c9-87d8175b7428"}, {"attributes": {"fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"field": "fill_alpha"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "ac2b958e-4fdb-47d8-b046-5bebfb888b6a"}, "type": "Rect", "id": "ac2b958e-4fdb-47d8-b046-5bebfb888b6a"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "4f62db88-9c43-4957-a9bb-fbc3087a2522"}, "type": "BasicTicker", "id": "4f62db88-9c43-4957-a9bb-fbc3087a2522"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f"}, "tags": [], "doc": null, "axis_label": "mpg", "formatter": {"type": "BasicTickFormatter", "id": "8f76139d-cc01-4e5e-a2a3-b0f89c8b5f10"}, "ticker": {"type": "BasicTicker", "id": "c2ceea5a-d7a1-4813-85f4-832a1619425c"}, "id": "406fc489-5182-461d-9047-9ac77af1d863"}, "type": "LinearAxis", "id": "406fc489-5182-461d-9047-9ac77af1d863"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [55.0], "width": [3.1499999999999986], "y": [27.5], "x": [19.95]}, "id": "eb57e76c-77a2-445d-a8d2-fb2042abb646"}, "type": "ColumnDataSource", "id": "eb57e76c-77a2-445d-a8d2-fb2042abb646"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [4.0], "width": [3.1499999999999986], "y": [2.0], "x": [41.9]}, "id": "248ec2a4-a00e-42f0-9d25-09ce5efeef3b"}, "type": "ColumnDataSource", "id": "248ec2a4-a00e-42f0-9d25-09ce5efeef3b"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "c2ceea5a-d7a1-4813-85f4-832a1619425c"}, "type": "BasicTicker", "id": "c2ceea5a-d7a1-4813-85f4-832a1619425c"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "1855c6f6-3fcc-4fc9-b938-45fe16de7ec1"}, "tags": [], "doc": null, "selection_glyph": null, "id": "71c97f90-15d3-44e0-aff4-7a4d95c2aabe", "glyph": {"type": "Rect", "id": "f98fdd1f-8d3a-463b-9ce9-88a2499c4bd3"}}, "type": "GlyphRenderer", "id": "71c97f90-15d3-44e0-aff4-7a4d95c2aabe"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [37.0], "width": [3.1499999999999986], "y": [18.5], "x": [32.485]}, "id": "92f6a4fd-20e4-475c-be83-1796eb9b22d0"}, "type": "ColumnDataSource", "id": "92f6a4fd-20e4-475c-be83-1796eb9b22d0"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "8198b320-ad97-4bf3-9672-a1519fb8f5b0"}, "type": "PanTool", "id": "8198b320-ad97-4bf3-9672-a1519fb8f5b0"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [4.0], "width": [3.1499999999999986], "y": [2.0], "x": [45.05]}, "id": "8f3a4671-88b4-4dd0-8127-a8a98f7aa026"}, "type": "ColumnDataSource", "id": "8f3a4671-88b4-4dd0-8127-a8a98f7aa026"}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f"}, "tags": [], "doc": null, "id": "9d653489-c020-4f43-bda5-b30859241542"}, "type": "ResizeTool", "id": "9d653489-c020-4f43-bda5-b30859241542"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [24.0], "width": [3.1499999999999986], "y": [12.0], "x": [35.635000000000005]}, "id": "4f28da13-3834-430f-894d-1ea588a58b7e"}, "type": "ColumnDataSource", "id": "4f28da13-3834-430f-894d-1ea588a58b7e"}, {"attributes": {"column_names": ["width", "y", "color", "x", "fill_alpha", "height"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["#f22c40"], "fill_alpha": [0.8], "height": [56.0], "width": [3.1499999999999986], "y": [28.0], "x": [13.7]}, "id": "953a0131-da18-44a3-8416-15ebc5717588"}, "type": "ColumnDataSource", "id": "953a0131-da18-44a3-8416-15ebc5717588"}, {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f", "attributes": {"x_range": {"type": "Range1d", "id": "d37fad7b-1aaf-413b-8df2-b230497da653"}, "title_text_font_style": "bold", "title_text_font_size": {"value": "12pt"}, "tags": [], "plot_width": 550, "renderers": [{"type": "GlyphRenderer", "id": "13d14b5d-6136-4432-afda-89605ac9ea13"}, {"type": "GlyphRenderer", "id": "df630bff-670b-4bae-bf32-fb6def08bfba"}, {"type": "GlyphRenderer", "id": "71c97f90-15d3-44e0-aff4-7a4d95c2aabe"}, {"type": "GlyphRenderer", "id": "da3e6fd5-9826-4e03-8210-56bb146e8ca8"}, {"type": "GlyphRenderer", "id": "184c27e2-cfe2-461c-8583-3e97dac26749"}, {"type": "GlyphRenderer", "id": "4901d6a5-0b4a-463c-934f-6317280c9b4f"}, {"type": "GlyphRenderer", "id": "a20e42a8-3017-4c43-b0af-b8c7cc062569"}, {"type": "GlyphRenderer", "id": "ac6ace88-5e12-4fbc-a219-f13d1f914faa"}, {"type": "GlyphRenderer", "id": "b6270692-5c4b-4d96-9232-874d240b60b7"}, {"type": "GlyphRenderer", "id": "f08364aa-504a-4b90-a928-d67d25391143"}, {"type": "GlyphRenderer", "id": "5b5efa86-eae0-42e0-8b20-b6e872622cea"}, {"type": "GlyphRenderer", "id": "e89c5e6f-f527-4337-9379-faec126369a1"}, {"type": "LinearAxis", "id": "406fc489-5182-461d-9047-9ac77af1d863"}, {"type": "LinearAxis", "id": "6cbbfa45-1dd3-4018-9a86-ca9a85d548fe"}, {"type": "Grid", "id": "6982ff10-9d0c-47c0-abc3-5cb150bab38e"}], "plot_height": 350, "right": [], "tool_events": {"type": "ToolEvents", "id": "ac598d59-cfc9-4512-b443-83cac4533495"}, "responsive": false, "tools": [{"type": "PanTool", "id": "8198b320-ad97-4bf3-9672-a1519fb8f5b0"}, {"type": "WheelZoomTool", "id": "1e13cd88-90e0-46a9-b432-2d85c9bb8164"}, {"type": "BoxZoomTool", "id": "11578a10-affd-43c6-97f4-6d83fa34623a"}, {"type": "PreviewSaveTool", "id": "c7067635-eb79-473c-845e-2fa784b5796b"}, {"type": "ResizeTool", "id": "9d653489-c020-4f43-bda5-b30859241542"}, {"type": "ResetTool", "id": "02e5dd95-edb2-4cf3-9c46-1b3610331e16"}, {"type": "HelpTool", "id": "c49cf3c7-fdd9-43e3-8c41-7e473ec78c8e"}], "id": "f052776b-0e2a-4c6b-b75a-5794460a002f", "title": "MPG Distribution", "y_range": {"type": "Range1d", "id": "b026d7ef-0b6b-45a0-8733-f9ecb0b5d3d6"}, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "406fc489-5182-461d-9047-9ac77af1d863"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "6cbbfa45-1dd3-4018-9a86-ca9a85d548fe"}]}}, {"attributes": {"plot": {"subtype": "Chart", "type": "Plot", "id": "f052776b-0e2a-4c6b-b75a-5794460a002f"}, "tags": [], "doc": null, "id": "c7067635-eb79-473c-845e-2fa784b5796b"}, "type": "PreviewSaveTool", "id": "c7067635-eb79-473c-845e-2fa784b5796b"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("b2fd3a34-bdea-42f1-86b5-c5296e9d354a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("b2fd3a34-bdea-42f1-86b5-c5296e9d354a", all_models);
    });
  }

}(this));