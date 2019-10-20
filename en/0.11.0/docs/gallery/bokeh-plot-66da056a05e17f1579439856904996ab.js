
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("20216892-27ec-464b-9cd7-e46c13dedda8");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '20216892-27ec-464b-9cd7-e46c13dedda8' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e457fae2-c235-4f49-bc21-24c475817030": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "805bce97-bed5-458e-910a-8056051f2dd7", "attributes": {"data": {"line_color": ["#0B486B", "#79BD9A", "#CFF09E", "#79BD9A", "#0B486B", "#79BD9A", "#CFF09E", "#79BD9A", "#0B486B"], "x": ["foo", "foo", "foo", "bar", "bar", "bar", "baz", "baz", "baz"], "y": ["foo", "bar", "baz", "foo", "bar", "baz", "foo", "bar", "baz"], "fill_color": ["#0B486B", "#79BD9A", "#CFF09E", "#79BD9A", "#0B486B", "#79BD9A", "#CFF09E", "#79BD9A", "#0B486B"]}, "column_names": ["x", "y", "line_color", "fill_color"], "callback": null}}, {"type": "CategoricalTickFormatter", "id": "bf5e9ab1-aac4-4d0e-bfcc-7e1df3c3292b", "attributes": {}}, {"type": "HoverTool", "id": "feffe6da-92aa-470f-b0c1-1e50cad6fec8", "attributes": {"callback": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "4b6d5761-50d0-4bf3-b2f5-e33d0a5fb3ca"}}}, {"type": "ResizeTool", "id": "bc476b09-7bf9-4f87-92de-108d101ad2e7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "752b5f4a-674e-4cce-8260-428b201a0058"}}}, {"type": "CategoricalTickFormatter", "id": "6e99b011-5242-4a71-b3f5-debbfb32f26c", "attributes": {}}, {"type": "CategoricalAxis", "id": "e60177ea-4443-4ef7-a605-38d69692fd14", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "4b388f3d-ae58-467f-9a73-6922037c5ead"}, "formatter": {"type": "CategoricalTickFormatter", "id": "6e99b011-5242-4a71-b3f5-debbfb32f26c"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "752b5f4a-674e-4cce-8260-428b201a0058"}}}, {"type": "CategoricalTicker", "id": "4b388f3d-ae58-467f-9a73-6922037c5ead", "attributes": {}}, {"type": "FactorRange", "id": "2d4b8f71-9263-4b5e-928a-9d6cc78482d0", "attributes": {"factors": ["foo", "bar", "baz"], "callback": null}}, {"type": "CategoricalAxis", "id": "8450d775-1dd9-4aa3-becc-b1a73a964b0d", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "7be5803c-d315-46a7-a836-247e3d56b603"}, "formatter": {"type": "CategoricalTickFormatter", "id": "bf5e9ab1-aac4-4d0e-bfcc-7e1df3c3292b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "4b6d5761-50d0-4bf3-b2f5-e33d0a5fb3ca"}}}, {"type": "ToolEvents", "id": "c2635684-df30-4df7-be87-d8a4167b1801", "attributes": {}}, {"type": "Rect", "id": "948bfcc9-8404-4bb6-94e9-ece4a25ecfd3", "attributes": {"line_color": {"value": "#1f77b4"}, "width": {"value": 1, "units": "data"}, "y": {"field": "y"}, "height": {"value": 1, "units": "data"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Grid", "id": "b0772e0b-86eb-4b59-86de-cc0f148daaaa", "attributes": {"ticker": {"type": "BasicTicker", "id": "4f439e02-e7f8-4ced-a2ad-5c1696243738"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "752b5f4a-674e-4cce-8260-428b201a0058"}}}, {"type": "VBox", "id": "ac79c19c-b862-4191-9190-0cfa37dbcb5d", "attributes": {"children": [{"type": "Plot", "subtype": "Figure", "id": "752b5f4a-674e-4cce-8260-428b201a0058"}, {"type": "Plot", "subtype": "Figure", "id": "4b6d5761-50d0-4bf3-b2f5-e33d0a5fb3ca"}]}}, {"type": "Plot", "id": "4b6d5761-50d0-4bf3-b2f5-e33d0a5fb3ca", "attributes": {"x_range": {"type": "FactorRange", "id": "dabdd0ce-07f8-4f2f-8fde-d698f179f6d0"}, "left": [{"type": "CategoricalAxis", "id": "8450d775-1dd9-4aa3-becc-b1a73a964b0d"}], "renderers": [{"type": "CategoricalAxis", "id": "684e13e7-3b4a-449a-b286-6b2337cdb064"}, {"type": "Grid", "id": "224187b2-ad8f-4b5d-bea5-ca2ac133d043"}, {"type": "CategoricalAxis", "id": "8450d775-1dd9-4aa3-becc-b1a73a964b0d"}, {"type": "Grid", "id": "e967a4a8-da42-4641-b982-a710d1016087"}, {"type": "GlyphRenderer", "id": "712c44b2-41c0-4bdf-95e6-82efb3d715a6"}], "y_range": {"type": "FactorRange", "id": "2d4b8f71-9263-4b5e-928a-9d6cc78482d0"}, "tools": [{"type": "ResizeTool", "id": "9465e5a4-dbb5-4ac3-a0a2-f99cd3ef3ff9"}, {"type": "HoverTool", "id": "feffe6da-92aa-470f-b0c1-1e50cad6fec8"}, {"type": "PreviewSaveTool", "id": "860c04b3-9d3d-40dc-b37c-8b578eee1050"}], "below": [{"type": "CategoricalAxis", "id": "684e13e7-3b4a-449a-b286-6b2337cdb064"}], "tool_events": {"type": "ToolEvents", "id": "c2635684-df30-4df7-be87-d8a4167b1801"}, "title": "Categorical Heatmap"}, "subtype": "Figure"}, {"type": "GlyphRenderer", "id": "708d1175-64ca-4e3a-a4ec-f0db8daeaa91", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6448e4b6-10dc-4f7c-bac8-ceff4674659b"}, "nonselection_glyph": {"type": "Segment", "id": "115541c7-0383-4c24-8e6e-11940ffbdbb0"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "e8dc1fb6-37f9-4e40-bec6-4fe27b86eb3c"}}}, {"type": "Segment", "id": "115541c7-0383-4c24-8e6e-11940ffbdbb0", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x1": {"field": "x1"}, "y0": {"field": "y0"}, "y1": {"field": "y1"}, "line_alpha": {"value": 0.1}, "x0": {"value": 0}}}, {"type": "CategoricalTickFormatter", "id": "b076dedd-a72c-42f1-910e-ce0f5cc63f14", "attributes": {}}, {"type": "Circle", "id": "fbf2bd65-29a1-430f-b725-e4ff50def640", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 15, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Rect", "id": "728691cd-9dfb-4d90-8b3d-4d2349f0d262", "attributes": {"line_color": {"field": "line_color"}, "width": {"value": 1, "units": "data"}, "y": {"field": "y"}, "height": {"value": 1, "units": "data"}, "x": {"field": "x"}, "fill_color": {"field": "fill_color"}}}, {"type": "FactorRange", "id": "dabdd0ce-07f8-4f2f-8fde-d698f179f6d0", "attributes": {"factors": ["foo", "bar", "baz"], "callback": null}}, {"type": "ColumnDataSource", "id": "6448e4b6-10dc-4f7c-bac8-ceff4674659b", "attributes": {"data": {"x1": [50, 40, 65, 10, 25, 37, 80, 60], "y0": ["a", "b", "c", "d", "e", "f", "g", "h"], "y1": ["a", "b", "c", "d", "e", "f", "g", "h"]}, "column_names": ["x1", "y0", "y1"], "callback": null}}, {"type": "Grid", "id": "224187b2-ad8f-4b5d-bea5-ca2ac133d043", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "83403a6a-ab9b-444c-b101-8837edac3476"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "4b6d5761-50d0-4bf3-b2f5-e33d0a5fb3ca"}}}, {"type": "CategoricalTicker", "id": "7be5803c-d315-46a7-a836-247e3d56b603", "attributes": {}}, {"type": "ToolEvents", "id": "698de2b4-e39e-4778-abfe-3303ab511d97", "attributes": {}}, {"type": "FactorRange", "id": "904ff2e8-0a95-4f21-bce3-d923ba204716", "attributes": {"factors": ["a", "b", "c", "d", "e", "f", "g", "h"], "callback": null}}, {"type": "Plot", "id": "752b5f4a-674e-4cce-8260-428b201a0058", "attributes": {"x_range": {"type": "Range1d", "id": "b4626431-4a61-4d93-a542-9fd6e73288b2"}, "left": [{"type": "CategoricalAxis", "id": "e60177ea-4443-4ef7-a605-38d69692fd14"}], "renderers": [{"type": "LinearAxis", "id": "1d273803-7413-489f-9356-e96bbda3c23e"}, {"type": "Grid", "id": "b0772e0b-86eb-4b59-86de-cc0f148daaaa"}, {"type": "CategoricalAxis", "id": "e60177ea-4443-4ef7-a605-38d69692fd14"}, {"type": "Grid", "id": "b45deb76-5ebd-455a-8002-ecc65916468e"}, {"type": "GlyphRenderer", "id": "708d1175-64ca-4e3a-a4ec-f0db8daeaa91"}, {"type": "GlyphRenderer", "id": "58853688-c847-4eae-b80d-0b76224e457f"}], "y_range": {"type": "FactorRange", "id": "904ff2e8-0a95-4f21-bce3-d923ba204716"}, "tools": [{"type": "ResizeTool", "id": "bc476b09-7bf9-4f87-92de-108d101ad2e7"}, {"type": "PreviewSaveTool", "id": "15abf7c7-dca0-465a-a50a-26fd84b95a20"}], "below": [{"type": "LinearAxis", "id": "1d273803-7413-489f-9356-e96bbda3c23e"}], "tool_events": {"type": "ToolEvents", "id": "698de2b4-e39e-4778-abfe-3303ab511d97"}, "title": "Dot Plot"}, "subtype": "Figure"}, {"type": "Segment", "id": "e8dc1fb6-37f9-4e40-bec6-4fe27b86eb3c", "attributes": {"line_color": {"value": "green"}, "line_width": {"value": 2}, "x1": {"field": "x1"}, "x0": {"value": 0}, "y1": {"field": "y1"}, "y0": {"field": "y0"}}}, {"type": "BasicTickFormatter", "id": "e2ef4e6a-9124-4eee-8209-d80a1287e42d", "attributes": {}}, {"type": "ResizeTool", "id": "9465e5a4-dbb5-4ac3-a0a2-f99cd3ef3ff9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "4b6d5761-50d0-4bf3-b2f5-e33d0a5fb3ca"}}}, {"type": "CategoricalAxis", "id": "684e13e7-3b4a-449a-b286-6b2337cdb064", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "83403a6a-ab9b-444c-b101-8837edac3476"}, "formatter": {"type": "CategoricalTickFormatter", "id": "b076dedd-a72c-42f1-910e-ce0f5cc63f14"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "4b6d5761-50d0-4bf3-b2f5-e33d0a5fb3ca"}}}, {"type": "ColumnDataSource", "id": "84039053-e998-4bab-8cb4-60d075b4a43b", "attributes": {"data": {"x": [50, 40, 65, 10, 25, 37, 80, 60], "y": ["a", "b", "c", "d", "e", "f", "g", "h"]}, "column_names": ["y", "x"], "callback": null}}, {"type": "Circle", "id": "30ce56a0-a3b1-4515-9f56-0fbd7494df23", "attributes": {"line_color": {"value": "green"}, "line_width": {"value": 3}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 15, "units": "screen"}, "fill_color": {"value": "orange"}}}, {"type": "Range1d", "id": "b4626431-4a61-4d93-a542-9fd6e73288b2", "attributes": {"end": 100, "callback": null}}, {"type": "Grid", "id": "e967a4a8-da42-4641-b982-a710d1016087", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "7be5803c-d315-46a7-a836-247e3d56b603"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "4b6d5761-50d0-4bf3-b2f5-e33d0a5fb3ca"}}}, {"type": "GlyphRenderer", "id": "712c44b2-41c0-4bdf-95e6-82efb3d715a6", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "805bce97-bed5-458e-910a-8056051f2dd7"}, "nonselection_glyph": {"type": "Rect", "id": "948bfcc9-8404-4bb6-94e9-ece4a25ecfd3"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "728691cd-9dfb-4d90-8b3d-4d2349f0d262"}}}, {"type": "PreviewSaveTool", "id": "860c04b3-9d3d-40dc-b37c-8b578eee1050", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "4b6d5761-50d0-4bf3-b2f5-e33d0a5fb3ca"}}}, {"type": "GlyphRenderer", "id": "58853688-c847-4eae-b80d-0b76224e457f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "84039053-e998-4bab-8cb4-60d075b4a43b"}, "nonselection_glyph": {"type": "Circle", "id": "fbf2bd65-29a1-430f-b725-e4ff50def640"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "30ce56a0-a3b1-4515-9f56-0fbd7494df23"}}}, {"type": "LinearAxis", "id": "1d273803-7413-489f-9356-e96bbda3c23e", "attributes": {"ticker": {"type": "BasicTicker", "id": "4f439e02-e7f8-4ced-a2ad-5c1696243738"}, "formatter": {"type": "BasicTickFormatter", "id": "e2ef4e6a-9124-4eee-8209-d80a1287e42d"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "752b5f4a-674e-4cce-8260-428b201a0058"}}}, {"type": "BasicTicker", "id": "4f439e02-e7f8-4ced-a2ad-5c1696243738", "attributes": {}}, {"type": "Grid", "id": "b45deb76-5ebd-455a-8002-ecc65916468e", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "4b388f3d-ae58-467f-9a73-6922037c5ead"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "752b5f4a-674e-4cce-8260-428b201a0058"}}}, {"type": "CategoricalTicker", "id": "83403a6a-ab9b-444c-b101-8837edac3476", "attributes": {}}, {"type": "PreviewSaveTool", "id": "15abf7c7-dca0-465a-a50a-26fd84b95a20", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "752b5f4a-674e-4cce-8260-428b201a0058"}}}], "root_ids": ["ac79c19c-b862-4191-9190-0cfa37dbcb5d"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "e457fae2-c235-4f49-bc21-24c475817030", "modelid": "ac79c19c-b862-4191-9190-0cfa37dbcb5d", "elementid": "20216892-27ec-464b-9cd7-e46c13dedda8"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));