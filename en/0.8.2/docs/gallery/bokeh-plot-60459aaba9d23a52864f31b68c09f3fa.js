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

  var elt = document.getElementById("98fbc179-dc0e-47eb-b438-fa14a8e8464e");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '98fbc179-dc0e-47eb-b438-fa14a8e8464e' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "ed2a6dfb-d2bb-44d5-b20f-fe1765b800cb", "type": "AnnularWedge", "attributes": {"tags": [], "fill_alpha": {"value": 1.0, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 80, "units": "data"}, "end_angle": {"field": "end_angle", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "start_angle": {"field": "start_angle", "units": "data"}, "line_alpha": {"value": 1.0, "units": "data"}, "id": "ed2a6dfb-d2bb-44d5-b20f-fe1765b800cb", "outer_radius": {"value": 300, "units": "data"}, "line_color": {"value": "black"}, "fill_color": {"value": "black"}}}, {"id": "18525351-0339-438c-8c78-6ac31b9d9398", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "y": {"field": "y", "units": "data"}, "text_alpha": {"value": 1.0, "units": "data"}, "angle": {"field": "angle", "units": "data"}, "text_align": "center", "doc": null, "x": {"field": "x", "units": "data"}, "text_color": {"value": "black"}, "text_font_size": "9pt", "id": "18525351-0339-438c-8c78-6ac31b9d9398", "text_baseline": "middle", "tags": []}}, {"id": "0b6f4e1e-e257-4664-b170-fc38a2d2d2af", "type": "AnnularWedge", "attributes": {"fill_alpha": {"value": 0.1, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 90, "units": "data"}, "end_angle": {"field": "end_angle", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "fill_color": {"value": "#1f77b4"}, "start_angle": {"field": "start_angle", "units": "data"}, "line_alpha": {"value": 0.1, "units": "data"}, "id": "0b6f4e1e-e257-4664-b170-fc38a2d2d2af", "outer_radius": {"field": "outer_radius", "units": "data"}, "line_color": {"value": "#1f77b4"}, "tags": []}}, {"id": "ccdd3584-606d-4984-9b78-3879718afbee", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"text": ["Mycobacterium tuberculosis", "Salmonella schottmuelleri", "Proteus vulgaris", "Klebsiella pneumoniae", "Brucella abortus", "Pseudomonas aeruginosa", "Escherichia coli", "Salmonella (Eberthella) typhosa", "Aerobacter aerogenes", "Brucella antracis", "Streptococcus fecalis", "Staphylococcus aureus", "Staphylococcus albus", "Streptococcus hemolyticus", "Streptococcus viridans", "Diplococcus pneumoniae"], "angle": [1.2011971910784505, 0.831598055362004, 0.46199891964555784, 0.09239978392911166, -0.2771993517873347, -0.646798487503781, -1.016397623220227, -1.3859967589366735, 1.3859967589366735, 1.0163976232202274, 0.6467984875037809, 0.2771993517873348, -0.0923997839291113, -0.4619989196455574, -0.8315980553620044, -1.2011971910784505], "y": [270.4169465272632, 214.31258599399115, 129.2641231751961, 26.757824244357604, -79.36226712090402, -174.76404454998436, -246.56296936158805, -285.06219890833154, -285.06219890833154, -246.56296936158816, -174.76404454998436, -79.3622671209041, 26.75782424435747, 129.26412317519595, 214.31258599399118, 270.4169465272632], "x": [104.76008319427433, 195.3717366575016, 259.59735449296807, 288.76291112556, 278.9294365201175, 231.42499591126946, 152.66532723443325, 53.28736016680539, -53.28736016680535, -152.6653272344331, -231.42499591126946, -278.9294365201175, -288.76291112556004, -259.5973544929681, -195.37173665750157, -104.76008319427436]}, "column_names": ["angle", "text", "x", "y"], "id": "ccdd3584-606d-4984-9b78-3879718afbee", "doc": null, "tags": []}}, {"id": "d0675179-8f77-4833-94f1-5d12ae35d1d8", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"text": ["Gram-positive", "Gram-negative"], "y": [-370, -390], "x": [-30, -30]}, "column_names": ["text", "x", "y"], "id": "d0675179-8f77-4833-94f1-5d12ae35d1d8", "doc": null, "tags": []}}, {"id": "a5894364-2da9-4ee2-b775-2100089a9f55", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"end_angle": [1.121997376282069, 0.7523982405656227, 0.3827991048491765, 0.013199969132730319, -0.356399166583716, -0.7259983023001624, -1.0955974380166085, -1.465196573733055, -1.834795709449501, -2.2043948451659467, -2.5739939808823933, -2.9435931165988394, -3.3131922523152855, -3.6827913880317316, -4.052390523748179, -4.421989659464624], "start_angle": [1.0691974997511482, 0.6995983640347018, 0.3299992283182556, -0.039599907398190574, -0.4091990431146369, -0.7787981788310833, -1.1483973145475292, -1.5179964502639758, -1.8875955859804219, -2.2571947216968677, -2.6267938574133143, -2.9963929931297604, -3.3659921288462065, -3.7355912645626526, -4.1051904002791, -4.474789535995545], "y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "outer_radius": [159.49517010860004, 202.64889203801422, 201.03749361799578, 168.47495629784697, 227.18192696067584, 180.8815241029378, 201.03749361799578, 243.8781742537954, 162.35069204091852, 246.45224684191624, 201.03749361799578, 290.0, 290.0, 139.7867850155062, 123.8914127986476, 139.7867850155062]}, "column_names": ["end_angle", "outer_radius", "start_angle", "x", "y"], "id": "a5894364-2da9-4ee2-b775-2100089a9f55", "doc": null, "tags": []}}, {"id": "9599c1b6-fa2b-4566-84f6-9427f61e4e98", "type": "AnnularWedge", "attributes": {"fill_alpha": {"value": 0.1, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 80, "units": "data"}, "end_angle": {"field": "end_angle", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "fill_color": {"value": "#1f77b4"}, "start_angle": {"field": "start_angle", "units": "data"}, "line_alpha": {"value": 0.1, "units": "data"}, "id": "9599c1b6-fa2b-4566-84f6-9427f61e4e98", "outer_radius": {"value": 300, "units": "data"}, "line_color": {"value": "#1f77b4"}, "tags": []}}, {"id": "4a13a915-3174-4fcd-a643-7d0620605e3c", "type": "ResetTool", "attributes": {"plot": {"id": "e39d95d1-5521-4435-9d31-eeb42d045171", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "4a13a915-3174-4fcd-a643-7d0620605e3c"}}, {"id": "f8bf6b09-6891-49de-bcbd-08ffea9fd35e", "type": "Line", "attributes": {"tags": [], "line_alpha": {"value": 0.1, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "f8bf6b09-6891-49de-bcbd-08ffea9fd35e", "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x", "units": "data"}}}, {"id": "3c8e5948-fae9-4136-a035-b3ad82a71f45", "type": "Line", "attributes": {"tags": [], "line_alpha": {"value": 0, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "3c8e5948-fae9-4136-a035-b3ad82a71f45", "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x", "units": "data"}}}, {"id": "97c7ac55-b2b8-4c8e-ba2e-d4a623655d6c", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "e39d95d1-5521-4435-9d31-eeb42d045171", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "97c7ac55-b2b8-4c8e-ba2e-d4a623655d6c"}}, {"id": "f8fabac5-fe95-4037-be1c-24efb9b85dec", "type": "Circle", "attributes": {"tags": [], "y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.1, "units": "data"}, "id": "f8fabac5-fe95-4037-be1c-24efb9b85dec", "radius": {"field": "radius", "units": "data"}, "fill_color": {"value": "#1f77b4"}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x", "units": "data"}, "line_alpha": {"value": 0.1, "units": "data"}}}, {"id": "25e74226-0f5d-4763-a6fa-07e5cef2e814", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "f76458bd-37c2-421d-87ac-9e5b88186646", "type": "Circle"}, "name": null, "data_source": {"id": "99485015-6696-432b-83b3-37aa706c7913", "type": "ColumnDataSource"}, "id": "25e74226-0f5d-4763-a6fa-07e5cef2e814", "glyph": {"id": "a859b7ce-7c85-46c2-94ca-f7806d531f1f", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "8635d660-8c08-445e-97ab-fef20f63d414", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "9599c1b6-fa2b-4566-84f6-9427f61e4e98", "type": "AnnularWedge"}, "name": null, "data_source": {"id": "9d74bef6-67b1-4e3d-ba0e-3b7d1b318f2d", "type": "ColumnDataSource"}, "id": "8635d660-8c08-445e-97ab-fef20f63d414", "glyph": {"id": "ed2a6dfb-d2bb-44d5-b20f-fe1765b800cb", "type": "AnnularWedge"}, "tags": [], "doc": null}}, {"id": "cba5e13a-950d-4a6d-a180-1fb12607f292", "type": "ToolEvents", "attributes": {"geometries": [], "id": "cba5e13a-950d-4a6d-a180-1fb12607f292", "doc": null, "tags": []}}, {"id": "8ffceb60-2fcf-45fe-8bb6-d17ead184fa6", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "y": {"field": "y", "units": "data"}, "text_alpha": {"value": 1.0, "units": "data"}, "text_align": "center", "doc": null, "x": {"field": "x", "units": "data"}, "text_color": {"value": "black"}, "text_font_size": "8pt", "id": "8ffceb60-2fcf-45fe-8bb6-d17ead184fa6", "text_baseline": "middle", "tags": []}}, {"id": "e39d95d1-5521-4435-9d31-eeb42d045171", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "cba5e13a-950d-4a6d-a180-1fb12607f292", "type": "ToolEvents"}, "title": "", "renderers": [{"id": "04baefc8-4030-4978-bba6-e71ef7ef61c9", "type": "GlyphRenderer"}, {"id": "bc8c73cc-71f7-4cff-b5a3-ec2622abd12b", "type": "GlyphRenderer"}, {"id": "fd62a06e-29fe-4e0c-ac2d-7194c46721d4", "type": "GlyphRenderer"}, {"id": "267ca1ac-6ee4-4b64-9a2c-8493bc8c747b", "type": "GlyphRenderer"}, {"id": "4ba43d10-b5b2-450c-a9ed-92b09e093ff1", "type": "GlyphRenderer"}, {"id": "23eaff16-405f-4f2e-9da2-2ca6924e3558", "type": "GlyphRenderer"}, {"id": "245839c4-38bb-4d49-bbc5-96fefdbf01c7", "type": "GlyphRenderer"}, {"id": "8635d660-8c08-445e-97ab-fef20f63d414", "type": "GlyphRenderer"}, {"id": "fa2f56f1-f8bc-4c87-940b-559b4b0b87e8", "type": "GlyphRenderer"}, {"id": "25e74226-0f5d-4763-a6fa-07e5cef2e814", "type": "GlyphRenderer"}, {"id": "484e14a6-9a72-4004-9a34-b24b2b9ed6e0", "type": "GlyphRenderer"}, {"id": "b8f972c4-27e6-4f80-9187-e61790b6e67e", "type": "GlyphRenderer"}, {"id": "ab443ca1-ba41-4eea-bc75-0789e37f355a", "type": "GlyphRenderer"}], "left": [], "x_range": {"id": "1f31173f-b663-4093-ad07-cd1cda5c8c09", "type": "Range1d"}, "extra_x_ranges": {}, "background_fill": "#f0e1d2", "below": [], "tools": [{"id": "404b7a97-ebb1-450c-90cd-94d93a05d85a", "type": "PanTool"}, {"id": "32996fe6-7409-43b9-8ea0-e186a40d1430", "type": "WheelZoomTool"}, {"id": "826d7961-bb73-4d91-8f3c-868f264afae1", "type": "BoxZoomTool"}, {"id": "97c7ac55-b2b8-4c8e-ba2e-d4a623655d6c", "type": "PreviewSaveTool"}, {"id": "a0ad3d0e-7e84-4aa4-9550-980a9d30ca44", "type": "ResizeTool"}, {"id": "4a13a915-3174-4fcd-a643-7d0620605e3c", "type": "ResetTool"}], "border_fill": "#f0e1d2", "id": "e39d95d1-5521-4435-9d31-eeb42d045171", "y_range": {"id": "046d6472-1d74-4d1b-a219-19766e5e8950", "type": "Range1d"}, "plot_width": 800, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "outline_line_color": {"value": "black"}, "right": [], "plot_height": 800, "tags": []}}, {"id": "cdddae80-8f72-4bd9-b651-e8ebb5cec34f", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], "x": [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]}, "column_names": ["x", "y"], "id": "cdddae80-8f72-4bd9-b651-e8ebb5cec34f", "doc": null, "tags": []}}, {"id": "fd62a06e-29fe-4e0c-ac2d-7194c46721d4", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "0b6f4e1e-e257-4664-b170-fc38a2d2d2af", "type": "AnnularWedge"}, "name": null, "data_source": {"id": "2b580e74-cc99-40ab-b386-8a9911a25728", "type": "ColumnDataSource"}, "id": "fd62a06e-29fe-4e0c-ac2d-7194c46721d4", "glyph": {"id": "07c26cc9-6022-4c16-92a2-0234d7bf381b", "type": "AnnularWedge"}, "tags": [], "doc": null}}, {"id": "484e14a6-9a72-4004-9a34-b24b2b9ed6e0", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "99359be7-f764-479a-9107-ce54d3f3229c", "type": "Text"}, "name": null, "data_source": {"id": "d0675179-8f77-4833-94f1-5d12ae35d1d8", "type": "ColumnDataSource"}, "id": "484e14a6-9a72-4004-9a34-b24b2b9ed6e0", "glyph": {"id": "12773e76-8955-4acf-a4ca-f1f01e87f239", "type": "Text"}, "tags": [], "doc": null}}, {"id": "2714e465-232e-4ae5-bad5-71cfbf51a35b", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "y": {"field": "y", "units": "data"}, "text_alpha": {"value": 1.0, "units": "data"}, "angle": {"field": "angle", "units": "data"}, "text_align": "center", "doc": null, "x": {"field": "x", "units": "data"}, "text_color": {"value": "black"}, "text_font_size": "9pt", "id": "2714e465-232e-4ae5-bad5-71cfbf51a35b", "text_baseline": "middle", "tags": []}}, {"id": "8dbc0ab3-e13d-43ed-8fbe-af6d6bb73c60", "type": "AnnularWedge", "attributes": {"fill_alpha": {"value": 0.1, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 90, "units": "data"}, "end_angle": {"field": "end_angle", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "fill_color": {"value": "#1f77b4"}, "start_angle": {"field": "start_angle", "units": "data"}, "line_alpha": {"value": 0.1, "units": "data"}, "id": "8dbc0ab3-e13d-43ed-8fbe-af6d6bb73c60", "outer_radius": {"value": 290, "units": "data"}, "line_color": {"value": "#1f77b4"}, "tags": []}}, {"id": "306c5856-e352-450e-8184-173c0e102587", "type": "AnnularWedge", "attributes": {"tags": [], "fill_alpha": {"value": 1.0, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 90, "units": "data"}, "end_angle": {"field": "end_angle", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "start_angle": {"field": "start_angle", "units": "data"}, "line_alpha": {"value": 1.0, "units": "data"}, "id": "306c5856-e352-450e-8184-173c0e102587", "outer_radius": {"field": "outer_radius", "units": "data"}, "line_color": {"value": "black"}, "fill_color": {"value": "black"}}}, {"id": "f1fa6171-07dd-45ed-af7d-eebf5383a595", "type": "Rect", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.1, "units": "data"}, "height": {"value": 13, "units": "data"}, "doc": null, "x": {"field": "x", "units": "data"}, "width": {"value": 30, "units": "data"}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1, "units": "data"}, "id": "f1fa6171-07dd-45ed-af7d-eebf5383a595", "line_color": {"value": "#1f77b4"}, "tags": []}}, {"id": "bc8c73cc-71f7-4cff-b5a3-ec2622abd12b", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "8dbc0ab3-e13d-43ed-8fbe-af6d6bb73c60", "type": "AnnularWedge"}, "name": null, "data_source": {"id": "c8798d42-a1d1-426e-bf9a-3dbc47ff3ded", "type": "ColumnDataSource"}, "id": "bc8c73cc-71f7-4cff-b5a3-ec2622abd12b", "glyph": {"id": "e2040574-0f15-40ea-b49c-8ae37e0e0a72", "type": "AnnularWedge"}, "tags": [], "doc": null}}, {"id": "04baefc8-4030-4978-bba6-e71ef7ef61c9", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "f8bf6b09-6891-49de-bcbd-08ffea9fd35e", "type": "Line"}, "name": null, "data_source": {"id": "cdddae80-8f72-4bd9-b651-e8ebb5cec34f", "type": "ColumnDataSource"}, "id": "04baefc8-4030-4978-bba6-e71ef7ef61c9", "glyph": {"id": "3c8e5948-fae9-4136-a035-b3ad82a71f45", "type": "Line"}, "tags": [], "doc": null}}, {"id": "07c26cc9-6022-4c16-92a2-0234d7bf381b", "type": "AnnularWedge", "attributes": {"tags": [], "fill_alpha": {"value": 1.0, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 90, "units": "data"}, "end_angle": {"field": "end_angle", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "start_angle": {"field": "start_angle", "units": "data"}, "line_alpha": {"value": 1.0, "units": "data"}, "id": "07c26cc9-6022-4c16-92a2-0234d7bf381b", "outer_radius": {"field": "outer_radius", "units": "data"}, "line_color": {"value": "#0d3362"}, "fill_color": {"value": "#0d3362"}}}, {"id": "4ba43d10-b5b2-450c-a9ed-92b09e093ff1", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "cf2199d0-dccc-4f9e-b6ae-105b354e198a", "type": "AnnularWedge"}, "name": null, "data_source": {"id": "a5894364-2da9-4ee2-b775-2100089a9f55", "type": "ColumnDataSource"}, "id": "4ba43d10-b5b2-450c-a9ed-92b09e093ff1", "glyph": {"id": "306c5856-e352-450e-8184-173c0e102587", "type": "AnnularWedge"}, "tags": [], "doc": null}}, {"id": "8b1731ce-f94f-49d1-9172-a0d24a92595c", "type": "Rect", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "height": {"value": 13, "units": "data"}, "doc": null, "x": {"field": "x", "units": "data"}, "width": {"value": 30, "units": "data"}, "fill_color": {"field": "fill_color", "units": "data"}, "line_alpha": {"value": 1.0, "units": "data"}, "id": "8b1731ce-f94f-49d1-9172-a0d24a92595c", "line_color": {"field": "line_color", "units": "data"}, "tags": []}}, {"id": "23eaff16-405f-4f2e-9da2-2ca6924e3558", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "f8fabac5-fe95-4037-be1c-24efb9b85dec", "type": "Circle"}, "name": null, "data_source": {"id": "801ef33d-cbbb-4e5e-a905-0b476a344d66", "type": "ColumnDataSource"}, "id": "23eaff16-405f-4f2e-9da2-2ca6924e3558", "glyph": {"id": "4a74df94-e72d-4e58-abbb-13fd7e80eb46", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "a859b7ce-7c85-46c2-94ca-f7806d531f1f", "type": "Circle", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "id": "a859b7ce-7c85-46c2-94ca-f7806d531f1f", "radius": {"value": 5, "units": "data"}, "fill_color": {"field": "fill_color", "units": "data"}, "line_color": {"field": "line_color", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "1f31173f-b663-4093-ad07-cd1cda5c8c09", "type": "Range1d", "attributes": {"end": 420, "start": -420, "id": "1f31173f-b663-4093-ad07-cd1cda5c8c09", "doc": null, "tags": []}}, {"id": "2b580e74-cc99-40ab-b386-8a9911a25728", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"end_angle": [1.3331968824057525, 0.9635977466893062, 0.5939986109728601, 0.2243994752564139, -0.1451996604600324, -0.5147987961764788, -0.8843979318929249, -1.2539970676093715, -1.6235962033258176, -1.9931953390422634, -2.3627944747587097, -2.732393610475156, -3.101992746191602, -3.471591881908048, -3.8411910176244954, -4.210790153340941], "start_angle": [1.2803970058748317, 0.9107978701583854, 0.5411987344419392, 0.17159959872549302, -0.1979995369909533, -0.5675986727073996, -0.9371978084238457, -1.3067969441402922, -1.6763960798567383, -2.045995215573184, -2.4155943512896307, -2.785193487006077, -3.154792622722523, -3.524391758438969, -3.8939908941554164, -4.263590029871862], "y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "outer_radius": [92.23339948031361, 139.7867850155062, 154.38766386903586, 91.62507700950238, 168.47495629784697, 91.62507700950238, 113.85069566245176, 168.47495629784697, 91.39201867367399, 290.0, 168.47495629784697, 220.2583199527764, 246.45224684191624, 290.0, 253.12378014254972, 253.12378014254972]}, "column_names": ["end_angle", "outer_radius", "start_angle", "x", "y"], "id": "2b580e74-cc99-40ab-b386-8a9911a25728", "doc": null, "tags": []}}, {"id": "aacf5b77-b870-4a1f-bf19-b82210731a0d", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "y": {"field": "y", "units": "data"}, "text_alpha": {"value": 1.0, "units": "data"}, "text_align": "left", "doc": null, "x": {"field": "x", "units": "data"}, "text_color": {"value": "black"}, "text_font_size": "9pt", "id": "aacf5b77-b870-4a1f-bf19-b82210731a0d", "text_baseline": "middle", "tags": []}}, {"id": "4a74df94-e72d-4e58-abbb-13fd7e80eb46", "type": "Circle", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "id": "4a74df94-e72d-4e58-abbb-13fd7e80eb46", "radius": {"field": "radius", "units": "data"}, "fill_color": null, "line_color": {"value": "white"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "801ef33d-cbbb-4e5e-a905-0b476a344d66", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"radius": [290.0, 239.66267873058516, 201.03749361799578, 168.47495629784697, 139.7867850155062, 113.85069566245176, 90.0], "y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, "column_names": ["radius", "x", "y"], "id": "801ef33d-cbbb-4e5e-a905-0b476a344d66", "doc": null, "tags": []}}, {"id": "a0ad3d0e-7e84-4aa4-9550-980a9d30ca44", "type": "ResizeTool", "attributes": {"plot": {"id": "e39d95d1-5521-4435-9d31-eeb42d045171", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "a0ad3d0e-7e84-4aa4-9550-980a9d30ca44"}}, {"id": "cf2199d0-dccc-4f9e-b6ae-105b354e198a", "type": "AnnularWedge", "attributes": {"fill_alpha": {"value": 0.1, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 90, "units": "data"}, "end_angle": {"field": "end_angle", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "fill_color": {"value": "#1f77b4"}, "start_angle": {"field": "start_angle", "units": "data"}, "line_alpha": {"value": 0.1, "units": "data"}, "id": "cf2199d0-dccc-4f9e-b6ae-105b354e198a", "outer_radius": {"field": "outer_radius", "units": "data"}, "line_color": {"value": "#1f77b4"}, "tags": []}}, {"id": "32996fe6-7409-43b9-8ea0-e186a40d1430", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "32996fe6-7409-43b9-8ea0-e186a40d1430", "plot": {"id": "e39d95d1-5521-4435-9d31-eeb42d045171", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "74a76533-098b-4908-b78f-783dffa408ed", "type": "AnnularWedge", "attributes": {"fill_alpha": {"value": 0.1, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 90, "units": "data"}, "end_angle": {"field": "end_angle", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "fill_color": {"value": "#1f77b4"}, "start_angle": {"field": "start_angle", "units": "data"}, "line_alpha": {"value": 0.1, "units": "data"}, "id": "74a76533-098b-4908-b78f-783dffa408ed", "outer_radius": {"field": "outer_radius", "units": "data"}, "line_color": {"value": "#1f77b4"}, "tags": []}}, {"id": "99359be7-f764-479a-9107-ce54d3f3229c", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "y": {"field": "y", "units": "data"}, "text_alpha": {"value": 1.0, "units": "data"}, "text_align": "left", "doc": null, "x": {"field": "x", "units": "data"}, "text_color": {"value": "black"}, "text_font_size": "7pt", "id": "99359be7-f764-479a-9107-ce54d3f3229c", "text_baseline": "middle", "tags": []}}, {"id": "826d7961-bb73-4d91-8f3c-868f264afae1", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "826d7961-bb73-4d91-8f3c-868f264afae1", "plot": {"id": "e39d95d1-5521-4435-9d31-eeb42d045171", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "86a893c3-8007-4af4-ad13-3fc47999077c", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"text": ["Penicillin", "Streptomycin", "Neomycin"], "y": [18, 0, -18], "x": [-15, -15, -15]}, "column_names": ["text", "x", "y"], "id": "86a893c3-8007-4af4-ad13-3fc47999077c", "doc": null, "tags": []}}, {"id": "9d74bef6-67b1-4e3d-ba0e-3b7d1b318f2d", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"end_angle": [1.0163976232202272, 0.6467984875037809, 0.27719935178733474, -0.09239978392911147, -0.4619989196455578, -0.8315980553620042, -1.2011971910784502, -1.5707963267948968, -1.9403954625113429, -2.3099945982277887, -2.6795937339442353, -3.0491928696606814, -3.4187920053771275, -3.7883911410935736, -4.157990276810021, -4.527589412526466], "y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "start_angle": [1.0163976232202272, 0.6467984875037809, 0.27719935178733474, -0.09239978392911147, -0.4619989196455578, -0.8315980553620042, -1.2011971910784502, -1.5707963267948968, -1.9403954625113429, -2.3099945982277887, -2.6795937339442353, -3.0491928696606814, -3.4187920053771275, -3.7883911410935736, -4.157990276810021, -4.527589412526466]}, "column_names": ["end_angle", "start_angle", "x", "y"], "id": "9d74bef6-67b1-4e3d-ba0e-3b7d1b318f2d", "doc": null, "tags": []}}, {"id": "f76458bd-37c2-421d-87ac-9e5b88186646", "type": "Circle", "attributes": {"tags": [], "y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.1, "units": "data"}, "id": "f76458bd-37c2-421d-87ac-9e5b88186646", "radius": {"value": 5, "units": "data"}, "fill_color": {"value": "#1f77b4"}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x", "units": "data"}, "line_alpha": {"value": 0.1, "units": "data"}}}, {"id": "e5ba38ea-ca83-4282-bbeb-2ef56ee82a8d", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"end_angle": [1.2275971293439107, 0.8579979936274644, 0.48839885791101834, 0.1187997221945721, -0.2507994135218742, -0.6203985492383206, -0.9899976849547667, -1.3595968206712132, -1.7291959563876593, -2.098795092104105, -2.4683942278205517, -2.837993363536998, -3.207592499253444, -3.57719163496989, -3.9467907706863374, -4.316389906402782], "start_angle": [1.17479725281299, 0.8051981170965435, 0.43559898138009745, 0.06599984566365122, -0.30359929005279507, -0.6731984257692415, -1.0427975614856875, -1.412396697202134, -1.78199583291858, -2.151594968635026, -2.5211941043514727, -2.890793240067919, -3.260392375784365, -3.629991511500811, -3.9995906472172584, -4.369189782933703], "y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "outer_radius": [148.09389702866355, 171.43725698767838, 201.03749361799578, 166.08111883679086, 159.49517010860004, 159.49517010860004, 180.8815241029378, 180.8815241029378, 168.47495629784697, 239.66267873058516, 168.47495629784697, 220.2583199527764, 201.03749361799578, 135.84452353427264, 139.7867850155062, 138.66430573015015]}, "column_names": ["end_angle", "outer_radius", "start_angle", "x", "y"], "id": "e5ba38ea-ca83-4282-bbeb-2ef56ee82a8d", "doc": null, "tags": []}}, {"id": "98df86f6-556a-4b71-a640-28f36097fdc2", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"text": ["0.001", "0.01", "0.1", "1.0", "10.0", "100.0"], "y": [290.0, 239.66267873058516, 201.03749361799578, 168.47495629784697, 139.7867850155062, 113.85069566245176], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, "column_names": ["text", "x", "y"], "id": "98df86f6-556a-4b71-a640-28f36097fdc2", "doc": null, "tags": []}}, {"id": "4561129e-0af8-474b-a6da-5a969aee3cf5", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "y": {"field": "y", "units": "data"}, "text_alpha": {"value": 1.0, "units": "data"}, "text_align": "center", "doc": null, "x": {"field": "x", "units": "data"}, "text_color": {"value": "black"}, "text_font_size": "8pt", "id": "4561129e-0af8-474b-a6da-5a969aee3cf5", "text_baseline": "middle", "tags": []}}, {"id": "046d6472-1d74-4d1b-a219-19766e5e8950", "type": "Range1d", "attributes": {"end": 420, "start": -420, "id": "046d6472-1d74-4d1b-a219-19766e5e8950", "doc": null, "tags": []}}, {"id": "37ff6044-d53b-4c0e-b323-a5c983496b51", "type": "AnnularWedge", "attributes": {"tags": [], "fill_alpha": {"value": 1.0, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 90, "units": "data"}, "end_angle": {"field": "end_angle", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "start_angle": {"field": "start_angle", "units": "data"}, "line_alpha": {"value": 1.0, "units": "data"}, "id": "37ff6044-d53b-4c0e-b323-a5c983496b51", "outer_radius": {"field": "outer_radius", "units": "data"}, "line_color": {"value": "#c64737"}, "fill_color": {"value": "#c64737"}}}, {"id": "ab443ca1-ba41-4eea-bc75-0789e37f355a", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "4abdfabe-d056-4e51-9b46-7faea808267e", "type": "Text"}, "name": null, "data_source": {"id": "86a893c3-8007-4af4-ad13-3fc47999077c", "type": "ColumnDataSource"}, "id": "ab443ca1-ba41-4eea-bc75-0789e37f355a", "glyph": {"id": "aacf5b77-b870-4a1f-bf19-b82210731a0d", "type": "Text"}, "tags": [], "doc": null}}, {"id": "404b7a97-ebb1-450c-90cd-94d93a05d85a", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "404b7a97-ebb1-450c-90cd-94d93a05d85a", "plot": {"id": "e39d95d1-5521-4435-9d31-eeb42d045171", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "245839c4-38bb-4d49-bbc5-96fefdbf01c7", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "8ffceb60-2fcf-45fe-8bb6-d17ead184fa6", "type": "Text"}, "name": null, "data_source": {"id": "98df86f6-556a-4b71-a640-28f36097fdc2", "type": "ColumnDataSource"}, "id": "245839c4-38bb-4d49-bbc5-96fefdbf01c7", "glyph": {"id": "4561129e-0af8-474b-a6da-5a969aee3cf5", "type": "Text"}, "tags": [], "doc": null}}, {"id": "c8798d42-a1d1-426e-bf9a-3dbc47ff3ded", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"start_angle": [1.0163976232202272, 0.6467984875037809, 0.27719935178733474, -0.09239978392911147, -0.4619989196455578, -0.8315980553620042, -1.2011971910784502, -1.5707963267948968, -1.9403954625113429, -2.3099945982277887, -2.6795937339442353, -3.0491928696606814, -3.4187920053771275, -3.7883911410935736, -4.157990276810021, -4.527589412526466], "fill_color": ["#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8"], "y": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "end_angle": [1.3859967589366735, 1.0163976232202272, 0.646798487503781, 0.2771993517873348, -0.09239978392911152, -0.46199891964555784, -0.8315980553620039, -1.2011971910784505, -1.5707963267948966, -1.9403954625113427, -2.309994598227789, -2.6795937339442353, -3.0491928696606814, -3.4187920053771275, -3.7883911410935744, -4.15799027681002], "line_color": ["#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#e69584", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8", "#aeaeb8"], "x": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]}, "column_names": ["end_angle", "fill_color", "line_color", "start_angle", "x", "y"], "id": "c8798d42-a1d1-426e-bf9a-3dbc47ff3ded", "doc": null, "tags": []}}, {"id": "99485015-6696-432b-83b3-37aa706c7913", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"line_color": ["#aeaeb8", "#e69584"], "y": [-370, -390], "x": [-40, -40], "fill_color": ["#aeaeb8", "#e69584"]}, "column_names": ["fill_color", "line_color", "x", "y"], "id": "99485015-6696-432b-83b3-37aa706c7913", "doc": null, "tags": []}}, {"id": "12773e76-8955-4acf-a4ca-f1f01e87f239", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "y": {"field": "y", "units": "data"}, "text_alpha": {"value": 1.0, "units": "data"}, "text_align": "left", "doc": null, "x": {"field": "x", "units": "data"}, "text_color": {"value": "black"}, "text_font_size": "7pt", "id": "12773e76-8955-4acf-a4ca-f1f01e87f239", "text_baseline": "middle", "tags": []}}, {"id": "e2040574-0f15-40ea-b49c-8ae37e0e0a72", "type": "AnnularWedge", "attributes": {"tags": [], "fill_alpha": {"value": 1.0, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 90, "units": "data"}, "end_angle": {"field": "end_angle", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "start_angle": {"field": "start_angle", "units": "data"}, "line_alpha": {"value": 1.0, "units": "data"}, "id": "e2040574-0f15-40ea-b49c-8ae37e0e0a72", "outer_radius": {"value": 290, "units": "data"}, "line_color": {"field": "line_color", "units": "data"}, "fill_color": {"field": "fill_color", "units": "data"}}}, {"id": "4abdfabe-d056-4e51-9b46-7faea808267e", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "y": {"field": "y", "units": "data"}, "text_alpha": {"value": 1.0, "units": "data"}, "text_align": "left", "doc": null, "x": {"field": "x", "units": "data"}, "text_color": {"value": "black"}, "text_font_size": "9pt", "id": "4abdfabe-d056-4e51-9b46-7faea808267e", "text_baseline": "middle", "tags": []}}, {"id": "b8f972c4-27e6-4f80-9187-e61790b6e67e", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "f1fa6171-07dd-45ed-af7d-eebf5383a595", "type": "Rect"}, "name": null, "data_source": {"id": "6f232ec7-0013-4e9a-926c-0bb0b3fc706f", "type": "ColumnDataSource"}, "id": "b8f972c4-27e6-4f80-9187-e61790b6e67e", "glyph": {"id": "8b1731ce-f94f-49d1-9172-a0d24a92595c", "type": "Rect"}, "tags": [], "doc": null}}, {"id": "fa2f56f1-f8bc-4c87-940b-559b4b0b87e8", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "2714e465-232e-4ae5-bad5-71cfbf51a35b", "type": "Text"}, "name": null, "data_source": {"id": "ccdd3584-606d-4984-9b78-3879718afbee", "type": "ColumnDataSource"}, "id": "fa2f56f1-f8bc-4c87-940b-559b4b0b87e8", "glyph": {"id": "18525351-0339-438c-8c78-6ac31b9d9398", "type": "Text"}, "tags": [], "doc": null}}, {"id": "6f232ec7-0013-4e9a-926c-0bb0b3fc706f", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"line_color": ["#0d3362", "#c64737", "black"], "y": [18, 0, -18], "x": [-40, -40, -40], "fill_color": ["#0d3362", "#c64737", "black"]}, "column_names": ["fill_color", "line_color", "x", "y"], "id": "6f232ec7-0013-4e9a-926c-0bb0b3fc706f", "doc": null, "tags": []}}, {"id": "267ca1ac-6ee4-4b64-9a2c-8493bc8c747b", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "74a76533-098b-4908-b78f-783dffa408ed", "type": "AnnularWedge"}, "name": null, "data_source": {"id": "e5ba38ea-ca83-4282-bbeb-2ef56ee82a8d", "type": "ColumnDataSource"}, "id": "267ca1ac-6ee4-4b64-9a2c-8493bc8c747b", "glyph": {"id": "37ff6044-d53b-4c0e-b323-a5c983496b51", "type": "AnnularWedge"}, "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("98fbc179-dc0e-47eb-b438-fa14a8e8464e", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("98fbc179-dc0e-47eb-b438-fa14a8e8464e", all_models);
    });
  }

}(this));