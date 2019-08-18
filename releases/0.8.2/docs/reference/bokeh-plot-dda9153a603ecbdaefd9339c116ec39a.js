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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("b450a0e8-b1d4-47a1-b6c4-634fbe9015d9");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b450a0e8-b1d4-47a1-b6c4-634fbe9015d9' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "645a49af-7ae5-4388-acf3-2b8f0f0c84d4", "type": "Plot", "attributes": {"tool_events": {"id": "362ea78e-1f90-4e0f-bc21-ef3f82b36708", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "69c0b41b-dabe-42eb-8cef-f51b67b2550e", "type": "GlyphRenderer"}, {"id": "de173bfe-4bc1-49e3-8baa-c7e7ffe1c31b", "type": "LinearAxis"}, {"id": "989c5ebf-ab72-4193-a0c9-bbaea1cd18ed", "type": "LinearAxis"}, {"id": "d1f85746-085f-4279-844e-af25e78687f9", "type": "Grid"}, {"id": "a2a97cb0-c275-4aa7-9d5a-bdbc5f7e7007", "type": "Grid"}], "left": [{"id": "989c5ebf-ab72-4193-a0c9-bbaea1cd18ed", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "ca6d3300-1941-4a46-a611-c2a6019a67fe", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "645a49af-7ae5-4388-acf3-2b8f0f0c84d4", "y_range": {"id": "b23f0db8-9950-47be-8bae-8980899ea041", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "de173bfe-4bc1-49e3-8baa-c7e7ffe1c31b", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "362ea78e-1f90-4e0f-bc21-ef3f82b36708", "type": "ToolEvents", "attributes": {"geometries": [], "id": "362ea78e-1f90-4e0f-bc21-ef3f82b36708", "doc": null, "tags": []}}, {"id": "47d2149b-a830-4e34-bfa2-70818ba0b44c", "type": "BasicTicker", "attributes": {"id": "47d2149b-a830-4e34-bfa2-70818ba0b44c", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "69c0b41b-dabe-42eb-8cef-f51b67b2550e", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "9f607a68-fb75-4df0-ac62-29d0af92bdd7", "type": "ColumnDataSource"}, "id": "69c0b41b-dabe-42eb-8cef-f51b67b2550e", "glyph": {"id": "0f7dcec4-e28d-4870-8713-4a4c28736129", "type": "Text"}, "tags": [], "doc": null}}, {"id": "a2a97cb0-c275-4aa7-9d5a-bdbc5f7e7007", "type": "Grid", "attributes": {"id": "a2a97cb0-c275-4aa7-9d5a-bdbc5f7e7007", "plot": {"id": "645a49af-7ae5-4388-acf3-2b8f0f0c84d4", "type": "Plot"}, "dimension": 1, "ticker": {"id": "f487de90-f368-49f7-9709-769e95bd051e", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "80a98623-2786-4604-9493-5c94bc92cb00", "type": "BasicTickFormatter", "attributes": {"id": "80a98623-2786-4604-9493-5c94bc92cb00", "doc": null, "tags": []}}, {"id": "ca6d3300-1941-4a46-a611-c2a6019a67fe", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "9f607a68-fb75-4df0-ac62-29d0af92bdd7", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "ca6d3300-1941-4a46-a611-c2a6019a67fe", "doc": null, "tags": []}}, {"id": "0f7dcec4-e28d-4870-8713-4a4c28736129", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "text_color": {"value": "#96deb3"}, "tags": [], "y": {"field": "y", "units": "data"}, "id": "0f7dcec4-e28d-4870-8713-4a4c28736129", "angle": {"value": 0.3, "units": "data"}, "doc": null, "x": {"field": "x", "units": "data"}}}, {"id": "d1f85746-085f-4279-844e-af25e78687f9", "type": "Grid", "attributes": {"id": "d1f85746-085f-4279-844e-af25e78687f9", "plot": {"id": "645a49af-7ae5-4388-acf3-2b8f0f0c84d4", "type": "Plot"}, "dimension": 0, "ticker": {"id": "47d2149b-a830-4e34-bfa2-70818ba0b44c", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "b23f0db8-9950-47be-8bae-8980899ea041", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "9f607a68-fb75-4df0-ac62-29d0af92bdd7", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "b23f0db8-9950-47be-8bae-8980899ea041", "doc": null, "tags": []}}, {"id": "f487de90-f368-49f7-9709-769e95bd051e", "type": "BasicTicker", "attributes": {"id": "f487de90-f368-49f7-9709-769e95bd051e", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "989c5ebf-ab72-4193-a0c9-bbaea1cd18ed", "type": "LinearAxis", "attributes": {"id": "989c5ebf-ab72-4193-a0c9-bbaea1cd18ed", "formatter": {"id": "f5cc020d-0e30-464b-8367-cbdadc481036", "type": "BasicTickFormatter"}, "plot": {"id": "645a49af-7ae5-4388-acf3-2b8f0f0c84d4", "type": "Plot"}, "ticker": {"id": "f487de90-f368-49f7-9709-769e95bd051e", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "de173bfe-4bc1-49e3-8baa-c7e7ffe1c31b", "type": "LinearAxis", "attributes": {"id": "de173bfe-4bc1-49e3-8baa-c7e7ffe1c31b", "formatter": {"id": "80a98623-2786-4604-9493-5c94bc92cb00", "type": "BasicTickFormatter"}, "plot": {"id": "645a49af-7ae5-4388-acf3-2b8f0f0c84d4", "type": "Plot"}, "ticker": {"id": "47d2149b-a830-4e34-bfa2-70818ba0b44c", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "f5cc020d-0e30-464b-8367-cbdadc481036", "type": "BasicTickFormatter", "attributes": {"id": "f5cc020d-0e30-464b-8367-cbdadc481036", "doc": null, "tags": []}}, {"id": "9f607a68-fb75-4df0-ac62-29d0af92bdd7", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"text": ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["text", "y", "x"], "id": "9f607a68-fb75-4df0-ac62-29d0af92bdd7", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("b450a0e8-b1d4-47a1-b6c4-634fbe9015d9", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("b450a0e8-b1d4-47a1-b6c4-634fbe9015d9", all_models);
    });
  }

}(this));