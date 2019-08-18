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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.js"

  var elt = document.getElementById("f2e1d976-a373-4a9a-b9a0-6c656cfb5656");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f2e1d976-a373-4a9a-b9a0-6c656cfb5656' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "a811b4a5-6a10-41b5-ae7c-77f55ce3d092"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "2fd6cc3d-8ab8-4a2f-a5cc-d307c70f3c7c"}, "plot": {"type": "Plot", "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5", "subtype": "Chart"}, "axis_label": null, "id": "b2e45f7f-fed7-4c55-b111-33add5d4e1ad"}, "id": "b2e45f7f-fed7-4c55-b111-33add5d4e1ad"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [0.362855846568078, -0.3628558465680776, -0.8838834764831843, -1.154849415639108], "angle": [5.988660995905543, 6.577709618453629, 7.0685834705770345, 7.461282552275758], "text": ["0", "1", "2"], "x": [-1.196175419665261, -1.1961754196652612, -0.8838834764831847, -0.4783542904563629]}, "doc": null, "id": "c48a2fd2-6f94-4648-a82a-a24d8f032708", "column_names": ["y", "angle", "text", "x"]}, "id": "c48a2fd2-6f94-4648-a82a-a24d8f032708"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5", "subtype": "Chart"}, "id": "798a9e9f-b7a9-41bd-9bed-2826b784e03c", "tags": [], "doc": null}, "id": "798a9e9f-b7a9-41bd-9bed-2826b784e03c"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5", "subtype": "Chart"}, "id": "3d79e824-4e0d-4dc4-a599-86c12493d224"}, "id": "3d79e824-4e0d-4dc4-a599-86c12493d224"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5", "subtype": "Chart"}, "id": "ac9ad694-2a45-425c-b751-a017fec21c34", "tags": [], "doc": null}, "id": "ac9ad694-2a45-425c-b751-a017fec21c34"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "d2c4b6d4-d7f7-44d8-b826-c7124effe5a0"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "9329ddde-e39f-4ce3-a100-d87b67f176e5"}, "plot": {"type": "Plot", "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5", "subtype": "Chart"}, "axis_label": null, "id": "5416e4e4-9660-4e5c-965c-0fd538ec6f55"}, "id": "5416e4e4-9660-4e5c-965c-0fd538ec6f55"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b75dc788-2b8a-429b-82b0-afcb9922f6f1"}, "tags": [], "glyph": {"type": "Text", "id": "8331235a-9c5f-4966-a293-0a004b4f58e6"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "065caeec-ec8a-4c5b-886f-c5c2a6dbb69a"}, "id": "065caeec-ec8a-4c5b-886f-c5c2a6dbb69a"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"end": [0.3272492347489368, 0.39269908169872414, 1.1780972450961724, 2.356194490192345, 2.356194490192345], "start": [-0.06544984694978735, 0.0, 0.39269908169872414, 1.1780972450961724, 2.356194490192345], "fill": ["#f22c40", "#f22c40", "#f22c40", "#f22c40"]}, "doc": null, "id": "0b383a2f-ebca-47ff-a47c-61249f89c0fa", "column_names": ["end", "start", "fill"]}, "id": "0b383a2f-ebca-47ff-a47c-61249f89c0fa"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "2fd6cc3d-8ab8-4a2f-a5cc-d307c70f3c7c", "tags": []}, "id": "2fd6cc3d-8ab8-4a2f-a5cc-d307c70f3c7c"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0b383a2f-ebca-47ff-a47c-61249f89c0fa"}, "tags": [], "glyph": {"type": "AnnularWedge", "id": "44c3f16f-928c-41d9-9224-6000ca1df75d"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "6d65fe9e-fee3-4c71-8c6d-9b0ac47d6bd3"}, "id": "6d65fe9e-fee3-4c71-8c6d-9b0ac47d6bd3"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5", "subtype": "Chart"}, "id": "c9895f27-fb02-4e47-aaef-a609325f9059", "tags": [], "doc": null}, "id": "c9895f27-fb02-4e47-aaef-a609325f9059"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "610f3f1e-f20f-4660-902e-fc8462a40145"}, "tags": [], "glyph": {"type": "Text", "id": "36e92bc0-5638-459a-9804-b87ffaa05be8"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "8963f0c9-c327-45b1-b222-89fe20617eba"}, "id": "8963f0c9-c327-45b1-b222-89fe20617eba"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "9329ddde-e39f-4ce3-a100-d87b67f176e5", "tags": []}, "id": "9329ddde-e39f-4ce3-a100-d87b67f176e5"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [0.6467156727579007, -0.13656322541128954, -0.5820287286117818], "x": [0.26787840265556284, -0.6865496962822614, 0.38889916311372125], "text": ["cpu1", "cpu2", "cpu3"]}, "doc": null, "id": "b75dc788-2b8a-429b-82b0-afcb9922f6f1", "column_names": ["y", "x", "text"]}, "id": "b75dc788-2b8a-429b-82b0-afcb9922f6f1"}, {"type": "AnnularWedge", "attributes": {"y": {"value": 0}, "end_angle": {"units": "rad", "field": "end"}, "outer_radius": {"units": "data", "value": 1.5}, "x": {"value": 0}, "tags": [], "inner_radius": {"units": "data", "value": 1}, "start_angle": {"units": "rad", "field": "start"}, "fill_color": {"field": "fill"}, "line_width": {"value": 2}, "line_color": {"value": "white"}, "doc": null, "id": "44c3f16f-928c-41d9-9224-6000ca1df75d"}, "id": "44c3f16f-928c-41d9-9224-6000ca1df75d"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "d2c4b6d4-d7f7-44d8-b826-c7124effe5a0", "tags": []}, "id": "d2c4b6d4-d7f7-44d8-b826-c7124effe5a0"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b13f60e3-7eec-4def-9503-2fc7da15e8a3"}, "tags": [], "glyph": {"type": "AnnularWedge", "id": "54cd8d50-6931-4c34-8f52-da33b6f48d41"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "07994654-71e1-4ce9-bff8-5f0b5de74f0d"}, "id": "07994654-71e1-4ce9-bff8-5f0b5de74f0d"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "a811b4a5-6a10-41b5-ae7c-77f55ce3d092", "tags": []}, "id": "a811b4a5-6a10-41b5-ae7c-77f55ce3d092"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [0.1631577402750645, 0.2438629025201603, 0.8838834764831843, 1.225981600504038, 0.8838834764831844], "angle": [0.13089969389957473, 0.19634954084936207, 0.7853981633974483, 4.908738521234052, 5.497787143782138], "text": ["", "0", "1", "2"], "x": [1.239306076717263, 1.225981600504038, 0.8838834764831844, -0.24386290252016024, -0.8838834764831843]}, "doc": null, "id": "610f3f1e-f20f-4660-902e-fc8462a40145", "column_names": ["y", "angle", "text", "x"]}, "id": "610f3f1e-f20f-4660-902e-fc8462a40145"}, {"type": "AnnularWedge", "attributes": {"y": {"value": 0}, "end_angle": {"units": "rad", "field": "end"}, "outer_radius": {"units": "data", "value": 1.5}, "x": {"value": 0}, "tags": [], "inner_radius": {"units": "data", "value": 1}, "start_angle": {"units": "rad", "field": "start"}, "fill_color": {"field": "fill"}, "line_width": {"value": 2}, "line_color": {"value": "white"}, "doc": null, "id": "ec562f6f-81ef-4ba1-b6c7-92440fab9182"}, "id": "ec562f6f-81ef-4ba1-b6c7-92440fab9182"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"end": [4.908738521234051, 5.694136684631499, 6.283185307179586, 6.283185307179586], "start": [4.319689898685965, 4.908738521234051, 5.694136684631499, 6.283185307179586], "fill": ["#407ee7", "#407ee7", "#407ee7", "#407ee7"]}, "doc": null, "id": "b13f60e3-7eec-4def-9503-2fc7da15e8a3", "column_names": ["end", "start", "fill"]}, "id": "b13f60e3-7eec-4def-9503-2fc7da15e8a3"}, {"type": "Text", "attributes": {"y": {"field": "y"}, "text": {"field": "text"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "8331235a-9c5f-4966-a293-0a004b4f58e6", "text_baseline": "middle", "text_align": "center"}, "id": "8331235a-9c5f-4966-a293-0a004b4f58e6"}, {"type": "Plot", "attributes": {"plot_height": 800, "extra_x_ranges": {}, "y_range": {"type": "Range1d", "id": "591bf510-fec6-4ed1-8675-c396ec6dc85f"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "9f1a7aaa-700c-4e6f-84f8-fce613a35944"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "b2e45f7f-fed7-4c55-b111-33add5d4e1ad"}, {"type": "LinearAxis", "id": "5416e4e4-9660-4e5c-965c-0fd538ec6f55"}, {"type": "GlyphRenderer", "id": "5d3f514a-5f55-42f7-bfd4-7b71fb4b222d"}, {"type": "GlyphRenderer", "id": "065caeec-ec8a-4c5b-886f-c5c2a6dbb69a"}, {"type": "GlyphRenderer", "id": "6d65fe9e-fee3-4c71-8c6d-9b0ac47d6bd3"}, {"type": "GlyphRenderer", "id": "8963f0c9-c327-45b1-b222-89fe20617eba"}, {"type": "GlyphRenderer", "id": "664bcdb5-29df-4c88-837a-cca52be6d9e9"}, {"type": "GlyphRenderer", "id": "66f6e792-10c9-4e2c-bed9-d382855a58c3"}, {"type": "GlyphRenderer", "id": "07994654-71e1-4ce9-bff8-5f0b5de74f0d"}, {"type": "GlyphRenderer", "id": "ef502327-7095-4d15-9327-d6f204f8e9bb"}], "below": [{"type": "LinearAxis", "id": "b2e45f7f-fed7-4c55-b111-33add5d4e1ad"}], "left": [{"type": "LinearAxis", "id": "5416e4e4-9660-4e5c-965c-0fd538ec6f55"}], "above": [], "tags": [], "plot_width": 800, "extra_y_ranges": {}, "title": null, "tools": [{"type": "PanTool", "id": "d181dcc8-1d5a-4097-be62-226b6007f643"}, {"type": "WheelZoomTool", "id": "3d79e824-4e0d-4dc4-a599-86c12493d224"}, {"type": "BoxZoomTool", "id": "a224d7a1-03bb-449d-a2af-94485bdc5cab"}, {"type": "PreviewSaveTool", "id": "798a9e9f-b7a9-41bd-9bed-2826b784e03c"}, {"type": "ResizeTool", "id": "faee4911-fb60-4db1-a1b5-7ccd25bbe7ac"}, {"type": "ResetTool", "id": "ac9ad694-2a45-425c-b751-a017fec21c34"}, {"type": "HelpTool", "id": "c9895f27-fb02-4e47-aaef-a609325f9059"}], "x_range": {"type": "Range1d", "id": "af1e0a5e-2a95-40a8-945d-739a07e6e968"}, "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5"}, "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5", "subtype": "Chart"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c96ab1c2-c025-45d3-b2ee-58231083d611"}, "tags": [], "glyph": {"type": "Wedge", "id": "3f4e302a-73fb-4a9d-8107-ed34ddbfbb4a"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "5d3f514a-5f55-42f7-bfd4-7b71fb4b222d"}, "id": "5d3f514a-5f55-42f7-bfd4-7b71fb4b222d"}, {"type": "Wedge", "attributes": {"y": {"value": 0}, "end_angle": {"units": "rad", "field": "end"}, "tags": [], "x": {"value": 0}, "start_angle": {"units": "rad", "field": "start"}, "fill_color": {"field": "colors"}, "line_width": {"value": 2}, "line_color": {"value": "white"}, "doc": null, "radius": {"units": "data", "value": 1}, "id": "3f4e302a-73fb-4a9d-8107-ed34ddbfbb4a"}, "id": "3f4e302a-73fb-4a9d-8107-ed34ddbfbb4a"}, {"type": "Range1d", "attributes": {"callback": null, "id": "591bf510-fec6-4ed1-8675-c396ec6dc85f", "tags": [], "doc": null, "end": 2, "start": -2}, "id": "591bf510-fec6-4ed1-8675-c396ec6dc85f"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5", "subtype": "Chart"}, "id": "faee4911-fb60-4db1-a1b5-7ccd25bbe7ac", "tags": [], "doc": null}, "id": "faee4911-fb60-4db1-a1b5-7ccd25bbe7ac"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"end": [3.3379421944391554, 3.5342917352885173, 4.319689898685965, 4.319689898685965], "start": [2.356194490192345, 3.3379421944391554, 3.5342917352885173, 4.319689898685965], "fill": ["#5ab738", "#5ab738", "#5ab738", "#5ab738"]}, "doc": null, "id": "71468f55-cfc4-4039-80b9-3a26b8b3356a", "column_names": ["end", "start", "fill"]}, "id": "71468f55-cfc4-4039-80b9-3a26b8b3356a"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5", "subtype": "Chart"}, "id": "d181dcc8-1d5a-4097-be62-226b6007f643"}, "id": "d181dcc8-1d5a-4097-be62-226b6007f643"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c48a2fd2-6f94-4648-a82a-a24d8f032708"}, "tags": [], "glyph": {"type": "Text", "id": "2d6a2913-c243-44f7-b1c3-29fd74d0cdc6"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "66f6e792-10c9-4e2c-bed9-d382855a58c3"}, "id": "66f6e792-10c9-4e2c-bed9-d382855a58c3"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"colors": ["#f22c40", "#5ab738", "#407ee7"], "end": [2.356194490192345, 4.319689898685965, 6.283185307179586], "start": [0.0, 2.356194490192345, 4.319689898685965]}, "doc": null, "id": "c96ab1c2-c025-45d3-b2ee-58231083d611", "column_names": ["colors", "end", "start"]}, "id": "c96ab1c2-c025-45d3-b2ee-58231083d611"}, {"type": "AnnularWedge", "attributes": {"y": {"value": 0}, "end_angle": {"units": "rad", "field": "end"}, "outer_radius": {"units": "data", "value": 1.5}, "x": {"value": 0}, "tags": [], "inner_radius": {"units": "data", "value": 1}, "start_angle": {"units": "rad", "field": "start"}, "fill_color": {"field": "fill"}, "line_width": {"value": 2}, "line_color": {"value": "white"}, "doc": null, "id": "54cd8d50-6931-4c34-8f52-da33b6f48d41"}, "id": "54cd8d50-6931-4c34-8f52-da33b6f48d41"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "ea3b1a7e-78e5-4fc0-86a5-fe3bc45b5cb5", "subtype": "Chart"}, "id": "a224d7a1-03bb-449d-a2af-94485bdc5cab"}, "id": "a224d7a1-03bb-449d-a2af-94485bdc5cab"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "9f1a7aaa-700c-4e6f-84f8-fce613a35944", "tags": [], "geometries": []}, "id": "9f1a7aaa-700c-4e6f-84f8-fce613a35944"}, {"type": "Text", "attributes": {"y": {"field": "y"}, "angle": {"units": "rad", "field": "angle"}, "text": {"field": "text"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "2d6a2913-c243-44f7-b1c3-29fd74d0cdc6", "text_baseline": "middle", "text_align": "center"}, "id": "2d6a2913-c243-44f7-b1c3-29fd74d0cdc6"}, {"type": "Text", "attributes": {"y": {"field": "y"}, "angle": {"units": "rad", "field": "angle"}, "text": {"field": "text"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "36e92bc0-5638-459a-9804-b87ffaa05be8", "text_baseline": "middle", "text_align": "center"}, "id": "36e92bc0-5638-459a-9804-b87ffaa05be8"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "468a399c-f726-4e14-9310-e6cb704be14e"}, "tags": [], "glyph": {"type": "Text", "id": "fc3ec846-2c6c-4c22-8bd4-a675f03e5db2"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "ef502327-7095-4d15-9327-d6f204f8e9bb"}, "id": "ef502327-7095-4d15-9327-d6f204f8e9bb"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "71468f55-cfc4-4039-80b9-3a26b8b3356a"}, "tags": [], "glyph": {"type": "AnnularWedge", "id": "ec562f6f-81ef-4ba1-b6c7-92440fab9182"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "664bcdb5-29df-4c88-837a-cca52be6d9e9"}, "id": "664bcdb5-29df-4c88-837a-cca52be6d9e9"}, {"type": "Text", "attributes": {"y": {"field": "y"}, "angle": {"units": "rad", "field": "angle"}, "text": {"field": "text"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "fc3ec846-2c6c-4c22-8bd4-a675f03e5db2", "text_baseline": "middle", "text_align": "center"}, "id": "fc3ec846-2c6c-4c22-8bd4-a675f03e5db2"}, {"type": "Range1d", "attributes": {"callback": null, "id": "af1e0a5e-2a95-40a8-945d-739a07e6e968", "tags": [], "doc": null, "end": 2, "start": -2}, "id": "af1e0a5e-2a95-40a8-945d-739a07e6e968"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [-1.243980908340246, -1.0393370153781818, -0.3628558465680792, -3.061616997868383e-16], "angle": [7.755806863549801, 5.301437602932776, 5.988660995905542, 6.283185307179586], "text": ["0", "1", "2"], "x": [-0.12252142541195167, 0.6944627912745023, 1.1961754196652608, 1.25]}, "doc": null, "id": "468a399c-f726-4e14-9310-e6cb704be14e", "column_names": ["y", "angle", "text", "x"]}, "id": "468a399c-f726-4e14-9310-e6cb704be14e"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("f2e1d976-a373-4a9a-b9a0-6c656cfb5656", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("f2e1d976-a373-4a9a-b9a0-6c656cfb5656", all_models);
    });
  }

}(this));