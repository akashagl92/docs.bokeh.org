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

  var elt = document.getElementById("af216393-bfa0-4130-a0cf-16b27df73682");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'af216393-bfa0-4130-a0cf-16b27df73682' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "73f4fbea-1b70-4b17-9463-9e8929a38c7c"}, "type": "PanTool", "id": "73f4fbea-1b70-4b17-9463-9e8929a38c7c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "6ce3bccd-4e4e-48be-9706-9950f30a0a56"}, "ticker": {"type": "BasicTicker", "id": "22e07974-859f-4a13-9c16-0a290196c434"}, "id": "4fea46e6-2058-4cf5-9de1-7dee77a32a6f"}, "type": "LinearAxis", "id": "4fea46e6-2058-4cf5-9de1-7dee77a32a6f"}, {"attributes": {"doc": null, "id": "7f71f74e-6776-4613-94f3-5dd423bd29a5", "tags": []}, "type": "BasicTickFormatter", "id": "7f71f74e-6776-4613-94f3-5dd423bd29a5"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "695f3587-bdb7-44b8-86fc-fac4141220f1", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "695f3587-bdb7-44b8-86fc-fac4141220f1"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "tags": [], "doc": null, "id": "82355126-609d-45bd-a1ad-07d603a9f2ca"}, "type": "ResizeTool", "id": "82355126-609d-45bd-a1ad-07d603a9f2ca"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "77c4fa2b-2703-4f0a-91c7-e84ed952daba"}, "type": "PanTool", "id": "77c4fa2b-2703-4f0a-91c7-e84ed952daba"}, {"attributes": {"line_color": {"value": "firebrick"}, "line_alpha": {"value": 0.5}, "fill_color": {"value": "firebrick"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "423623e8-6a60-4a5d-bf07-ceb371ed66d8", "size": {"units": "screen", "value": 10}}, "type": "Triangle", "id": "423623e8-6a60-4a5d-bf07-ceb371ed66d8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "tags": [], "doc": null, "id": "5b8b9954-cd8f-4ddc-8d07-c92c8bbce93b"}, "type": "PreviewSaveTool", "id": "5b8b9954-cd8f-4ddc-8d07-c92c8bbce93b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "2b16953b-1fad-4d64-8812-4aae7365f5b3"}, "type": "WheelZoomTool", "id": "2b16953b-1fad-4d64-8812-4aae7365f5b3"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "ea32b73f-ed6c-4014-8a80-e7a5adf00f17"}, "ticker": {"type": "BasicTicker", "id": "e0eb1d3b-c920-4814-9112-dc9538d886f2"}, "id": "8d67481c-9d96-4e6a-96b9-6916731edaa1"}, "type": "LinearAxis", "id": "8d67481c-9d96-4e6a-96b9-6916731edaa1"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "5f4383a1-400a-481c-976d-c0e638d22a5d"}, "type": "BoxZoomTool", "id": "5f4383a1-400a-481c-976d-c0e638d22a5d"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "f4eecbc9-07d1-42bc-8a0c-9394287635b3"}, "type": "DataRange1d", "id": "f4eecbc9-07d1-42bc-8a0c-9394287635b3"}, {"attributes": {"nonselection_glyph": {"type": "Triangle", "id": "f82c3229-b773-4eae-96a9-f14107b73cff"}, "data_source": {"type": "ColumnDataSource", "id": "94eec450-e176-4b88-b8a4-e8d34046df18"}, "tags": [], "doc": null, "selection_glyph": null, "id": "ea0d59bd-dae0-406b-ad85-aae09b65f116", "glyph": {"type": "Triangle", "id": "423623e8-6a60-4a5d-bf07-ceb371ed66d8"}}, "type": "GlyphRenderer", "id": "ea0d59bd-dae0-406b-ad85-aae09b65f116"}, {"attributes": {"doc": null, "id": "ea32b73f-ed6c-4014-8a80-e7a5adf00f17", "tags": []}, "type": "BasicTickFormatter", "id": "ea32b73f-ed6c-4014-8a80-e7a5adf00f17"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "e0eb1d3b-c920-4814-9112-dc9538d886f2"}, "id": "715cb27d-ae5a-4b99-aaf7-bba85863c2cd"}, "type": "Grid", "id": "715cb27d-ae5a-4b99-aaf7-bba85863c2cd"}, {"attributes": {"doc": null, "id": "d72de447-86c1-4358-9465-9edce5326241", "tags": []}, "type": "BasicTickFormatter", "id": "d72de447-86c1-4358-9465-9edce5326241"}, {"attributes": {"line_color": {"value": "navy"}, "line_alpha": {"value": 0.5}, "fill_color": {"value": "navy"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "ce02311a-0fbe-452c-96e7-05c1a7b16f7b", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "ce02311a-0fbe-452c-96e7-05c1a7b16f7b"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "7b2d16a3-8500-4a8c-bbce-d847506fe2f8"}, "type": "DataRange1d", "id": "7b2d16a3-8500-4a8c-bbce-d847506fe2f8"}, {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08", "attributes": {"x_range": {"type": "DataRange1d", "id": "7c5e2cf3-8245-4e5a-9d01-2b0cbdd2a289"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "73f4fbea-1b70-4b17-9463-9e8929a38c7c"}, {"type": "WheelZoomTool", "id": "2b16953b-1fad-4d64-8812-4aae7365f5b3"}, {"type": "BoxZoomTool", "id": "5f4383a1-400a-481c-976d-c0e638d22a5d"}, {"type": "PreviewSaveTool", "id": "fccde171-2223-409b-904b-857821b66f86"}, {"type": "ResizeTool", "id": "084b7ae1-fa4e-4b86-bb40-9cebcc57a1e1"}, {"type": "ResetTool", "id": "9345acd4-dee4-4821-835b-cfe45dc3dc00"}, {"type": "HelpTool", "id": "643296cc-f56a-4a96-b11b-b90e5e49952d"}], "title": null, "extra_y_ranges": {}, "plot_width": 250, "renderers": [{"type": "LinearAxis", "id": "d4360aa2-9916-4f57-9180-b0c58ec85337"}, {"type": "Grid", "id": "4d934147-8182-46f7-b402-5798c65f09fa"}, {"type": "LinearAxis", "id": "d6855102-8c1b-466a-99c2-6a003e57e184"}, {"type": "Grid", "id": "6f9a1491-596d-4771-bf63-13c536d464cf"}, {"type": "GlyphRenderer", "id": "d20fc4a9-1a9b-4e55-88fc-595768befde5"}], "extra_x_ranges": {}, "plot_height": 250, "tool_events": {"type": "ToolEvents", "id": "df05ba27-c490-4968-b135-0ab385c4372d"}, "above": [], "doc": null, "id": "5ca366ea-630b-46e7-832f-44a59593aa08", "y_range": {"type": "DataRange1d", "id": "b271f04a-66b3-4b2d-a152-2364d66d099b"}, "below": [{"type": "LinearAxis", "id": "d4360aa2-9916-4f57-9180-b0c58ec85337"}], "left": [{"type": "LinearAxis", "id": "d6855102-8c1b-466a-99c2-6a003e57e184"}]}}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "e0eb1d3b-c920-4814-9112-dc9538d886f2", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "e0eb1d3b-c920-4814-9112-dc9538d886f2"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "7f71f74e-6776-4613-94f3-5dd423bd29a5"}, "ticker": {"type": "BasicTicker", "id": "e8d81de9-2ff1-4006-b953-413e29a23521"}, "id": "3957e334-6b03-43c8-9022-a4c49b8feaf7"}, "type": "LinearAxis", "id": "3957e334-6b03-43c8-9022-a4c49b8feaf7"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "tags": [], "doc": null, "id": "084b7ae1-fa4e-4b86-bb40-9cebcc57a1e1"}, "type": "ResizeTool", "id": "084b7ae1-fa4e-4b86-bb40-9cebcc57a1e1"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "tags": [], "doc": null, "id": "7ad477d0-7264-4365-9275-36647c40b53b"}, "type": "PreviewSaveTool", "id": "7ad477d0-7264-4365-9275-36647c40b53b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "tags": [], "doc": null, "id": "306530ef-04fd-4ed1-bade-d91a8953a75a"}, "type": "ResetTool", "id": "306530ef-04fd-4ed1-bade-d91a8953a75a"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ab36d406-de2f-4250-8e66-0be562de5d38", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "ab36d406-de2f-4250-8e66-0be562de5d38"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5], "x": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "id": "f9d6f7df-7d42-4e0a-9dfe-61756c0507f4"}, "type": "ColumnDataSource", "id": "f9d6f7df-7d42-4e0a-9dfe-61756c0507f4"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "tags": [], "doc": null, "id": "9345acd4-dee4-4821-835b-cfe45dc3dc00"}, "type": "ResetTool", "id": "9345acd4-dee4-4821-835b-cfe45dc3dc00"}, {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c", "attributes": {"x_range": {"type": "DataRange1d", "id": "af6d51a5-8985-4555-a648-cd9b4c58ca46"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "77c4fa2b-2703-4f0a-91c7-e84ed952daba"}, {"type": "WheelZoomTool", "id": "528c4e6d-07ea-4081-b8f4-3abbb5ff4e57"}, {"type": "BoxZoomTool", "id": "1f9fac70-c34e-4d89-8896-6d3c60555a9b"}, {"type": "PreviewSaveTool", "id": "7ad477d0-7264-4365-9275-36647c40b53b"}, {"type": "ResizeTool", "id": "17e0b012-b988-4227-956b-9aa0d0463ca8"}, {"type": "ResetTool", "id": "306530ef-04fd-4ed1-bade-d91a8953a75a"}, {"type": "HelpTool", "id": "d4a1ff83-d5d1-4357-944a-6f7723d3b532"}], "title": null, "extra_y_ranges": {}, "plot_width": 250, "renderers": [{"type": "LinearAxis", "id": "3957e334-6b03-43c8-9022-a4c49b8feaf7"}, {"type": "Grid", "id": "4cc1e500-46da-4d6e-af88-113d170ae24d"}, {"type": "LinearAxis", "id": "8d67481c-9d96-4e6a-96b9-6916731edaa1"}, {"type": "Grid", "id": "715cb27d-ae5a-4b99-aaf7-bba85863c2cd"}, {"type": "GlyphRenderer", "id": "ea0d59bd-dae0-406b-ad85-aae09b65f116"}], "extra_x_ranges": {}, "plot_height": 250, "tool_events": {"type": "ToolEvents", "id": "99a6c173-0999-42f4-9b36-371faf7fb23d"}, "above": [], "doc": null, "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c", "y_range": {"type": "DataRange1d", "id": "3fad9a73-c4cf-44c7-b08b-d29e92cc2bc3"}, "below": [{"type": "LinearAxis", "id": "3957e334-6b03-43c8-9022-a4c49b8feaf7"}], "left": [{"type": "LinearAxis", "id": "8d67481c-9d96-4e6a-96b9-6916731edaa1"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "tags": [], "doc": null, "id": "643296cc-f56a-4a96-b11b-b90e5e49952d"}, "type": "HelpTool", "id": "643296cc-f56a-4a96-b11b-b90e5e49952d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "ad67d086-cc1f-4de1-8fa1-f7c12c850d2b"}, "type": "WheelZoomTool", "id": "ad67d086-cc1f-4de1-8fa1-f7c12c850d2b"}, {"attributes": {"doc": null, "id": "491c7576-3563-4a11-81d0-0e6ee62e1e31", "tags": []}, "type": "BasicTickFormatter", "id": "491c7576-3563-4a11-81d0-0e6ee62e1e31"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "99a6c173-0999-42f4-9b36-371faf7fb23d"}, "type": "ToolEvents", "id": "99a6c173-0999-42f4-9b36-371faf7fb23d"}, {"attributes": {"doc": null, "id": "6ce3bccd-4e4e-48be-9706-9950f30a0a56", "tags": []}, "type": "BasicTickFormatter", "id": "6ce3bccd-4e4e-48be-9706-9950f30a0a56"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "491c7576-3563-4a11-81d0-0e6ee62e1e31"}, "ticker": {"type": "BasicTicker", "id": "845a3241-d81f-47d0-a1cf-e20985fb98f3"}, "id": "4840d863-dc92-4555-bd8a-ce79fb40d575"}, "type": "LinearAxis", "id": "4840d863-dc92-4555-bd8a-ce79fb40d575"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "1f9fac70-c34e-4d89-8896-6d3c60555a9b"}, "type": "BoxZoomTool", "id": "1f9fac70-c34e-4d89-8896-6d3c60555a9b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "ab36d406-de2f-4250-8e66-0be562de5d38"}, "id": "4d934147-8182-46f7-b402-5798c65f09fa"}, "type": "Grid", "id": "4d934147-8182-46f7-b402-5798c65f09fa"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "d72de447-86c1-4358-9465-9edce5326241"}, "ticker": {"type": "BasicTicker", "id": "7c00d42b-29d7-41c7-bb09-c419fafd36d2"}, "id": "d6855102-8c1b-466a-99c2-6a003e57e184"}, "type": "LinearAxis", "id": "d6855102-8c1b-466a-99c2-6a003e57e184"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "22e07974-859f-4a13-9c16-0a290196c434"}, "id": "1f1e4532-a195-43c5-b83a-e1c63a980829"}, "type": "Grid", "id": "1f1e4532-a195-43c5-b83a-e1c63a980829"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "7c00d42b-29d7-41c7-bb09-c419fafd36d2", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "7c00d42b-29d7-41c7-bb09-c419fafd36d2"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "f82c3229-b773-4eae-96a9-f14107b73cff", "size": {"units": "screen", "value": 10}}, "type": "Triangle", "id": "f82c3229-b773-4eae-96a9-f14107b73cff"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "528c4e6d-07ea-4081-b8f4-3abbb5ff4e57"}, "type": "WheelZoomTool", "id": "528c4e6d-07ea-4081-b8f4-3abbb5ff4e57"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "tags": [], "doc": null, "id": "f4125c76-0e79-4edd-9583-0b697909cc60"}, "type": "HelpTool", "id": "f4125c76-0e79-4edd-9583-0b697909cc60"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "b271f04a-66b3-4b2d-a152-2364d66d099b"}, "type": "DataRange1d", "id": "b271f04a-66b3-4b2d-a152-2364d66d099b"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "af6d51a5-8985-4555-a648-cd9b4c58ca46"}, "type": "DataRange1d", "id": "af6d51a5-8985-4555-a648-cd9b4c58ca46"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "b389fa53-1332-436a-af85-7f6ea01fb53f"}, "ticker": {"type": "BasicTicker", "id": "ab36d406-de2f-4250-8e66-0be562de5d38"}, "id": "d4360aa2-9916-4f57-9180-b0c58ec85337"}, "type": "LinearAxis", "id": "d4360aa2-9916-4f57-9180-b0c58ec85337"}, {"attributes": {"doc": null, "id": "b389fa53-1332-436a-af85-7f6ea01fb53f", "tags": []}, "type": "BasicTickFormatter", "id": "b389fa53-1332-436a-af85-7f6ea01fb53f"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "845a3241-d81f-47d0-a1cf-e20985fb98f3", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "845a3241-d81f-47d0-a1cf-e20985fb98f3"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "7c00d42b-29d7-41c7-bb09-c419fafd36d2"}, "id": "6f9a1491-596d-4771-bf63-13c536d464cf"}, "type": "Grid", "id": "6f9a1491-596d-4771-bf63-13c536d464cf"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], "x": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "id": "94eec450-e176-4b88-b8a4-e8d34046df18"}, "type": "ColumnDataSource", "id": "94eec450-e176-4b88-b8a4-e8d34046df18"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, "tags": [], "doc": null, "id": "fccde171-2223-409b-904b-857821b66f86"}, "type": "PreviewSaveTool", "id": "fccde171-2223-409b-904b-857821b66f86"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "22e07974-859f-4a13-9c16-0a290196c434", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "22e07974-859f-4a13-9c16-0a290196c434"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "50ef83d9-a441-4289-abca-7b6e0b6fb483"}, "type": "ToolEvents", "id": "50ef83d9-a441-4289-abca-7b6e0b6fb483"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "38274864-8a4b-4fa5-95d3-86582fc1801e"}, "type": "BoxZoomTool", "id": "38274864-8a4b-4fa5-95d3-86582fc1801e"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "7c5e2cf3-8245-4e5a-9d01-2b0cbdd2a289"}, "type": "DataRange1d", "id": "7c5e2cf3-8245-4e5a-9d01-2b0cbdd2a289"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "7cdaab9c-7977-4b09-bf77-d97e78b0904a", "size": {"units": "screen", "value": 10}}, "type": "Square", "id": "7cdaab9c-7977-4b09-bf77-d97e78b0904a"}, {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0", "attributes": {"x_range": {"type": "DataRange1d", "id": "f4eecbc9-07d1-42bc-8a0c-9394287635b3"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "2ae4222b-bbfd-42a3-9ada-7b54121f748b"}, {"type": "WheelZoomTool", "id": "ad67d086-cc1f-4de1-8fa1-f7c12c850d2b"}, {"type": "BoxZoomTool", "id": "38274864-8a4b-4fa5-95d3-86582fc1801e"}, {"type": "PreviewSaveTool", "id": "5b8b9954-cd8f-4ddc-8d07-c92c8bbce93b"}, {"type": "ResizeTool", "id": "82355126-609d-45bd-a1ad-07d603a9f2ca"}, {"type": "ResetTool", "id": "ef6c31c8-0737-4227-a3d9-fc1ec30e87ae"}, {"type": "HelpTool", "id": "f4125c76-0e79-4edd-9583-0b697909cc60"}], "title": null, "extra_y_ranges": {}, "plot_width": 250, "renderers": [{"type": "LinearAxis", "id": "4840d863-dc92-4555-bd8a-ce79fb40d575"}, {"type": "Grid", "id": "2e0a47e1-6b72-4ca1-b7cc-289b83941d96"}, {"type": "LinearAxis", "id": "4fea46e6-2058-4cf5-9de1-7dee77a32a6f"}, {"type": "Grid", "id": "1f1e4532-a195-43c5-b83a-e1c63a980829"}, {"type": "GlyphRenderer", "id": "d314f65d-7cb6-46f6-8b14-05b1f03a9530"}], "extra_x_ranges": {}, "plot_height": 250, "tool_events": {"type": "ToolEvents", "id": "50ef83d9-a441-4289-abca-7b6e0b6fb483"}, "above": [], "doc": null, "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0", "y_range": {"type": "DataRange1d", "id": "7b2d16a3-8500-4a8c-bbce-d847506fe2f8"}, "below": [{"type": "LinearAxis", "id": "4840d863-dc92-4555-bd8a-ce79fb40d575"}], "left": [{"type": "LinearAxis", "id": "4fea46e6-2058-4cf5-9de1-7dee77a32a6f"}]}}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "x": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "id": "bb638ec3-dd7c-4446-bc54-552e59aa2ea7"}, "type": "ColumnDataSource", "id": "bb638ec3-dd7c-4446-bc54-552e59aa2ea7"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "e8d81de9-2ff1-4006-b953-413e29a23521", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "e8d81de9-2ff1-4006-b953-413e29a23521"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "df05ba27-c490-4968-b135-0ab385c4372d"}, "type": "ToolEvents", "id": "df05ba27-c490-4968-b135-0ab385c4372d"}, {"attributes": {"nonselection_glyph": {"type": "Square", "id": "7cdaab9c-7977-4b09-bf77-d97e78b0904a"}, "data_source": {"type": "ColumnDataSource", "id": "f9d6f7df-7d42-4e0a-9dfe-61756c0507f4"}, "tags": [], "doc": null, "selection_glyph": null, "id": "d314f65d-7cb6-46f6-8b14-05b1f03a9530", "glyph": {"type": "Square", "id": "abe232b3-2e3f-4d87-91ff-e041c1ec1c7b"}}, "type": "GlyphRenderer", "id": "d314f65d-7cb6-46f6-8b14-05b1f03a9530"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "2ae4222b-bbfd-42a3-9ada-7b54121f748b"}, "type": "PanTool", "id": "2ae4222b-bbfd-42a3-9ada-7b54121f748b"}, {"attributes": {"line_color": {"value": "olive"}, "line_alpha": {"value": 0.5}, "fill_color": {"value": "olive"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "abe232b3-2e3f-4d87-91ff-e041c1ec1c7b", "size": {"units": "screen", "value": 10}}, "type": "Square", "id": "abe232b3-2e3f-4d87-91ff-e041c1ec1c7b"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "695f3587-bdb7-44b8-86fc-fac4141220f1"}, "data_source": {"type": "ColumnDataSource", "id": "bb638ec3-dd7c-4446-bc54-552e59aa2ea7"}, "tags": [], "doc": null, "selection_glyph": null, "id": "d20fc4a9-1a9b-4e55-88fc-595768befde5", "glyph": {"type": "Circle", "id": "ce02311a-0fbe-452c-96e7-05c1a7b16f7b"}}, "type": "GlyphRenderer", "id": "d20fc4a9-1a9b-4e55-88fc-595768befde5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "tags": [], "doc": null, "id": "ef6c31c8-0737-4227-a3d9-fc1ec30e87ae"}, "type": "ResetTool", "id": "ef6c31c8-0737-4227-a3d9-fc1ec30e87ae"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "845a3241-d81f-47d0-a1cf-e20985fb98f3"}, "id": "2e0a47e1-6b72-4ca1-b7cc-289b83941d96"}, "type": "Grid", "id": "2e0a47e1-6b72-4ca1-b7cc-289b83941d96"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "e8d81de9-2ff1-4006-b953-413e29a23521"}, "id": "4cc1e500-46da-4d6e-af88-113d170ae24d"}, "type": "Grid", "id": "4cc1e500-46da-4d6e-af88-113d170ae24d"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "3fad9a73-c4cf-44c7-b08b-d29e92cc2bc3"}, "type": "DataRange1d", "id": "3fad9a73-c4cf-44c7-b08b-d29e92cc2bc3"}, {"attributes": {"tags": [], "doc": null, "id": "0bbbfb3d-dfe8-4b6b-aae1-208e9d7701c8", "children": [{"subtype": "Figure", "type": "Plot", "id": "5ca366ea-630b-46e7-832f-44a59593aa08"}, {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, {"subtype": "Figure", "type": "Plot", "id": "e35c7765-43b7-4d04-afe5-3a19151c85c0"}]}, "type": "VBox", "id": "0bbbfb3d-dfe8-4b6b-aae1-208e9d7701c8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "tags": [], "doc": null, "id": "17e0b012-b988-4227-956b-9aa0d0463ca8"}, "type": "ResizeTool", "id": "17e0b012-b988-4227-956b-9aa0d0463ca8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "e42f250f-5c1f-4153-a902-3fd54bfa0c7c"}, "tags": [], "doc": null, "id": "d4a1ff83-d5d1-4357-944a-6f7723d3b532"}, "type": "HelpTool", "id": "d4a1ff83-d5d1-4357-944a-6f7723d3b532"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("af216393-bfa0-4130-a0cf-16b27df73682", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("af216393-bfa0-4130-a0cf-16b27df73682", all_models);
    });
  }

}(this));