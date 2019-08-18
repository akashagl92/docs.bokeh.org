
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
  };var element = document.getElementById("4031be88-52a6-4924-b155-6f00e7244fb0");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '4031be88-52a6-4924-b155-6f00e7244fb0' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"33794555-722a-4552-8cce-3bae2d2a0790":{"roots":{"references":[{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"5d8fe12f-87c5-4f08-980c-057c5549f99f","type":"FactorRange"},{"attributes":{"dimension":1,"plot":{"id":"1cffb635-410a-423b-aeb3-94bb8b5e0c59","subtype":"Figure","type":"Plot"},"ticker":{"id":"4189a632-eb8c-4f41-8f30-5f6d4726f744","type":"CategoricalTicker"}},"id":"ca25bd44-9a60-4a35-8b6b-9218d3a4c300","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d1685de-472f-41d6-a94b-bd8a44d46214","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"838453dd-afd0-4605-ad4d-51811c02cca8","type":"ColumnDataSource"},{"attributes":{},"id":"b575ad41-776d-4667-b900-c266b9a1cba8","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"e609b2e1-242b-4c87-8380-173a292d7a14","type":"FactorRange"},{"attributes":{},"id":"88983a4c-a7aa-4f7e-9616-e786e25f4451","type":"ToolEvents"},{"attributes":{"plot":{"id":"1cffb635-410a-423b-aeb3-94bb8b5e0c59","subtype":"Figure","type":"Plot"}},"id":"7d549d5b-5c74-410a-ba50-9b7969f8208f","type":"PreviewSaveTool"},{"attributes":{"callback":null,"plot":{"id":"1cffb635-410a-423b-aeb3-94bb8b5e0c59","subtype":"Figure","type":"Plot"}},"id":"bf36c523-82ad-4033-be5b-263a70adca37","type":"HoverTool"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"4b455425-4656-4d8d-be24-2c3210c3b6d7","type":"FactorRange"},{"attributes":{"plot":{"id":"1cffb635-410a-423b-aeb3-94bb8b5e0c59","subtype":"Figure","type":"Plot"}},"id":"d28568a0-721e-42b9-b6ab-2f21b3958543","type":"ResizeTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"9e71ecbc-72a9-42d3-b3ce-b163f169375b","type":"Segment"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"5729e1cf-b442-412f-871b-e178f782c318","type":"ColumnDataSource"},{"attributes":{},"id":"9cb01c4d-0ebf-4713-9499-8ae4e297b396","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"9dc81417-6837-4ed4-8687-294fa7b20c2b","type":"Circle"},{"attributes":{"data_source":{"id":"838453dd-afd0-4605-ad4d-51811c02cca8","type":"ColumnDataSource"},"glyph":{"id":"f2c97227-dc51-4a05-8fa1-175eb6a187bf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"7d1685de-472f-41d6-a94b-bd8a44d46214","type":"Rect"},"selection_glyph":null},"id":"02dc3810-396f-40c1-8d65-26c0764fc2fb","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"ed59c995-a7ab-4515-86e3-0b07de111d42","subtype":"Figure","type":"Plot"},{"id":"1cffb635-410a-423b-aeb3-94bb8b5e0c59","subtype":"Figure","type":"Plot"}]},"id":"2276c44e-4bd2-4403-b362-4fef2660c0c2","type":"VBox"},{"attributes":{"formatter":{"id":"a595576d-7966-4cd0-b650-70a5b2deb307","type":"BasicTickFormatter"},"plot":{"id":"ed59c995-a7ab-4515-86e3-0b07de111d42","subtype":"Figure","type":"Plot"},"ticker":{"id":"e553055e-46c2-467c-a76b-b7824afb83b3","type":"BasicTicker"}},"id":"f834aa48-8bd0-4d5a-8eb5-f31dfedd932c","type":"LinearAxis"},{"attributes":{"plot":{"id":"ed59c995-a7ab-4515-86e3-0b07de111d42","subtype":"Figure","type":"Plot"}},"id":"a5bf3b88-ea77-454b-a150-da0a198ac36b","type":"ResizeTool"},{"attributes":{"callback":null,"end":100},"id":"5a46b4f2-d467-46ec-8989-5e4d10a638ed","type":"Range1d"},{"attributes":{},"id":"aafac0e9-3ebb-4a30-bec5-82a93f4735b8","type":"ToolEvents"},{"attributes":{"below":[{"id":"f834aa48-8bd0-4d5a-8eb5-f31dfedd932c","type":"LinearAxis"}],"left":[{"id":"50bf7903-b90a-4dbb-ab1b-545f6cc50889","type":"CategoricalAxis"}],"renderers":[{"id":"f834aa48-8bd0-4d5a-8eb5-f31dfedd932c","type":"LinearAxis"},{"id":"4d4e4ff9-cd97-4964-b84e-c5e6bd9b5b1a","type":"Grid"},{"id":"50bf7903-b90a-4dbb-ab1b-545f6cc50889","type":"CategoricalAxis"},{"id":"7016b23d-268c-42d1-9330-010aeed3d942","type":"Grid"},{"id":"cbbc8b53-9b00-487b-a945-1fc5afcb146d","type":"GlyphRenderer"},{"id":"e94253b0-41f8-4175-a750-9b67f43f621f","type":"GlyphRenderer"}],"title":"Dot Plot","tool_events":{"id":"aafac0e9-3ebb-4a30-bec5-82a93f4735b8","type":"ToolEvents"},"tools":[{"id":"a5bf3b88-ea77-454b-a150-da0a198ac36b","type":"ResizeTool"},{"id":"d664efc4-0c22-4785-8e2e-65cf13ad222e","type":"PreviewSaveTool"}],"x_range":{"id":"5a46b4f2-d467-46ec-8989-5e4d10a638ed","type":"Range1d"},"y_range":{"id":"e609b2e1-242b-4c87-8380-173a292d7a14","type":"FactorRange"}},"id":"ed59c995-a7ab-4515-86e3-0b07de111d42","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"ed59c995-a7ab-4515-86e3-0b07de111d42","subtype":"Figure","type":"Plot"}},"id":"d664efc4-0c22-4785-8e2e-65cf13ad222e","type":"PreviewSaveTool"},{"attributes":{"data_source":{"id":"cb57950d-2ced-4e39-8d47-9fb7a2a1cb2e","type":"ColumnDataSource"},"glyph":{"id":"22317d39-a801-4473-ae9f-fbddbe10ae41","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"9e71ecbc-72a9-42d3-b3ce-b163f169375b","type":"Segment"},"selection_glyph":null},"id":"cbbc8b53-9b00-487b-a945-1fc5afcb146d","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"0fce16c2-4811-49f2-84f7-6f4b3ccc9fd1","type":"CategoricalTickFormatter"},"plot":{"id":"1cffb635-410a-423b-aeb3-94bb8b5e0c59","subtype":"Figure","type":"Plot"},"ticker":{"id":"9cb01c4d-0ebf-4713-9499-8ae4e297b396","type":"CategoricalTicker"}},"id":"3f320350-c993-4c18-8b53-82b3e031daa7","type":"CategoricalAxis"},{"attributes":{},"id":"3ebd6846-9794-4525-98d5-92e4d996c095","type":"CategoricalTicker"},{"attributes":{},"id":"e9f03b9d-00cf-4511-ac68-615552a1895e","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"b575ad41-776d-4667-b900-c266b9a1cba8","type":"CategoricalTickFormatter"},"plot":{"id":"ed59c995-a7ab-4515-86e3-0b07de111d42","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ebd6846-9794-4525-98d5-92e4d996c095","type":"CategoricalTicker"}},"id":"50bf7903-b90a-4dbb-ab1b-545f6cc50889","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"1cffb635-410a-423b-aeb3-94bb8b5e0c59","subtype":"Figure","type":"Plot"},"ticker":{"id":"9cb01c4d-0ebf-4713-9499-8ae4e297b396","type":"CategoricalTicker"}},"id":"b4a5aad2-a843-4258-95f0-9bbf31f97ace","type":"Grid"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"22317d39-a801-4473-ae9f-fbddbe10ae41","type":"Segment"},{"attributes":{"plot":{"id":"ed59c995-a7ab-4515-86e3-0b07de111d42","subtype":"Figure","type":"Plot"},"ticker":{"id":"e553055e-46c2-467c-a76b-b7824afb83b3","type":"BasicTicker"}},"id":"4d4e4ff9-cd97-4964-b84e-c5e6bd9b5b1a","type":"Grid"},{"attributes":{},"id":"0fce16c2-4811-49f2-84f7-6f4b3ccc9fd1","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"3f320350-c993-4c18-8b53-82b3e031daa7","type":"CategoricalAxis"}],"left":[{"id":"320a9aa9-352d-4e3d-b96b-51221e648b50","type":"CategoricalAxis"}],"renderers":[{"id":"3f320350-c993-4c18-8b53-82b3e031daa7","type":"CategoricalAxis"},{"id":"b4a5aad2-a843-4258-95f0-9bbf31f97ace","type":"Grid"},{"id":"320a9aa9-352d-4e3d-b96b-51221e648b50","type":"CategoricalAxis"},{"id":"ca25bd44-9a60-4a35-8b6b-9218d3a4c300","type":"Grid"},{"id":"02dc3810-396f-40c1-8d65-26c0764fc2fb","type":"GlyphRenderer"}],"title":"Categorical Heatmap","tool_events":{"id":"88983a4c-a7aa-4f7e-9616-e786e25f4451","type":"ToolEvents"},"tools":[{"id":"d28568a0-721e-42b9-b6ab-2f21b3958543","type":"ResizeTool"},{"id":"bf36c523-82ad-4033-be5b-263a70adca37","type":"HoverTool"},{"id":"7d549d5b-5c74-410a-ba50-9b7969f8208f","type":"PreviewSaveTool"}],"x_range":{"id":"4b455425-4656-4d8d-be24-2c3210c3b6d7","type":"FactorRange"},"y_range":{"id":"5d8fe12f-87c5-4f08-980c-057c5549f99f","type":"FactorRange"}},"id":"1cffb635-410a-423b-aeb3-94bb8b5e0c59","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2c97227-dc51-4a05-8fa1-175eb6a187bf","type":"Rect"},{"attributes":{"formatter":{"id":"e9f03b9d-00cf-4511-ac68-615552a1895e","type":"CategoricalTickFormatter"},"plot":{"id":"1cffb635-410a-423b-aeb3-94bb8b5e0c59","subtype":"Figure","type":"Plot"},"ticker":{"id":"4189a632-eb8c-4f41-8f30-5f6d4726f744","type":"CategoricalTicker"}},"id":"320a9aa9-352d-4e3d-b96b-51221e648b50","type":"CategoricalAxis"},{"attributes":{},"id":"a595576d-7966-4cd0-b650-70a5b2deb307","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e369bbca-d613-4776-af4e-c13f204e1422","type":"Circle"},{"attributes":{},"id":"4189a632-eb8c-4f41-8f30-5f6d4726f744","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"cb57950d-2ced-4e39-8d47-9fb7a2a1cb2e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5729e1cf-b442-412f-871b-e178f782c318","type":"ColumnDataSource"},"glyph":{"id":"9dc81417-6837-4ed4-8687-294fa7b20c2b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"e369bbca-d613-4776-af4e-c13f204e1422","type":"Circle"},"selection_glyph":null},"id":"e94253b0-41f8-4175-a750-9b67f43f621f","type":"GlyphRenderer"},{"attributes":{},"id":"e553055e-46c2-467c-a76b-b7824afb83b3","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ed59c995-a7ab-4515-86e3-0b07de111d42","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ebd6846-9794-4525-98d5-92e4d996c095","type":"CategoricalTicker"}},"id":"7016b23d-268c-42d1-9330-010aeed3d942","type":"Grid"}],"root_ids":["2276c44e-4bd2-4403-b362-4fef2660c0c2"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"33794555-722a-4552-8cce-3bae2d2a0790","elementid":"4031be88-52a6-4924-b155-6f00e7244fb0","modelid":"2276c44e-4bd2-4403-b362-4fef2660c0c2"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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