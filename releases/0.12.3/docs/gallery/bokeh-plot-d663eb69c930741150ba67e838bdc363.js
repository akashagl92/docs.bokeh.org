document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("b09d6bc9-0eff-4a2a-9fca-8d828916b017");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b09d6bc9-0eff-4a2a-9fca-8d828916b017' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"2b458bea-35d9-43e4-8be2-d6160df314c6":{"roots":{"references":[{"attributes":{"formatter":{"id":"9f6d1a7c-ebcc-4b87-afa5-73e169b3cfb5","type":"CategoricalTickFormatter"},"plot":{"id":"6c628fdd-f521-4f98-8609-91479e0bc9a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"6527fcae-1501-4433-9c1d-4677e7e9408f","type":"CategoricalTicker"}},"id":"d121f846-c7a1-4a5e-8255-2ebf5c9f30ad","type":"CategoricalAxis"},{"attributes":{},"id":"5d615dfb-d4a2-4f3b-b067-1e9be9f6922d","type":"CategoricalTickFormatter"},{"attributes":{},"id":"197fd315-e52d-4573-8473-4a9c8f19d50a","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"8d093e65-2b37-4c2a-8648-ee3350f44f8f","type":"Title"},{"attributes":{"children":[{"id":"6c628fdd-f521-4f98-8609-91479e0bc9a1","subtype":"Figure","type":"Plot"},{"id":"1a750143-fc8c-491f-b82f-fa2a3bc90b58","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"61435341-314d-4ff8-930e-9be62e881fc0","type":"Row"},{"attributes":{},"id":"9f6d1a7c-ebcc-4b87-afa5-73e169b3cfb5","type":"CategoricalTickFormatter"},{"attributes":{},"id":"3f3c1bc7-312d-4ac3-aaf7-621a87d4197e","type":"ToolEvents"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"21210f77-877b-49f1-9a5e-407ae0fe67ab","type":"FactorRange"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"90d67702-4864-4c13-acd6-3982294fa112","type":"FactorRange"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fed51ec-a151-457d-b838-0afd69c9a9da","type":"Rect"},{"attributes":{"data_source":{"id":"cef4646e-5852-424d-9968-a0d463a6b998","type":"ColumnDataSource"},"glyph":{"id":"7fed51ec-a151-457d-b838-0afd69c9a9da","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"41748320-2e09-45e6-a9a5-6e81211a73ca","type":"Rect"},"selection_glyph":null},"id":"74701096-1e0b-46d5-acad-f39e9e50353b","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":100},"id":"4846a72d-02b0-43e2-bf8f-a64fa37b87c3","type":"Range1d"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"c8c2f6f8-f9c1-4cfd-bca3-587a4ae23359","type":"FactorRange"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"10241a7f-dd92-4d99-8bb4-9830d1869a5d","type":"Circle"},{"attributes":{"below":[{"id":"43e638d7-2ca4-4b72-b601-2b1944f1444e","type":"LinearAxis"}],"left":[{"id":"5e06882e-01e7-47c9-9c05-716629ab3369","type":"CategoricalAxis"}],"renderers":[{"id":"43e638d7-2ca4-4b72-b601-2b1944f1444e","type":"LinearAxis"},{"id":"8c21a717-19c3-4522-8550-8c6da2b0e2cb","type":"Grid"},{"id":"5e06882e-01e7-47c9-9c05-716629ab3369","type":"CategoricalAxis"},{"id":"130e16d3-3815-4ef7-a991-aecdb75c85f0","type":"Grid"},{"id":"9ea864f3-9af7-4a5e-bf3d-3f3b3da7d339","type":"GlyphRenderer"},{"id":"71447974-147a-4479-b48d-eb10209465d5","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"8d093e65-2b37-4c2a-8648-ee3350f44f8f","type":"Title"},"tool_events":{"id":"9c3ac62f-9176-49aa-9334-3046770410fb","type":"ToolEvents"},"toolbar":{"id":"a23b6f31-1338-4bce-a65a-dda86dff1ff5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4846a72d-02b0-43e2-bf8f-a64fa37b87c3","type":"Range1d"},"y_range":{"id":"90d67702-4864-4c13-acd6-3982294fa112","type":"FactorRange"}},"id":"1a750143-fc8c-491f-b82f-fa2a3bc90b58","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"c7f522fe-aeeb-4e79-aec8-e70c875ae138","type":"CategoricalTickFormatter"},"plot":{"id":"1a750143-fc8c-491f-b82f-fa2a3bc90b58","subtype":"Figure","type":"Plot"},"ticker":{"id":"424d03d4-9bb2-4ee1-bf11-5c768d893031","type":"CategoricalTicker"}},"id":"5e06882e-01e7-47c9-9c05-716629ab3369","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"1cd1d8c3-3dc5-4de3-afa2-a20a807d9b2b","type":"ColumnDataSource"},{"attributes":{},"id":"2524389b-aa8c-4826-af9e-17628d389cf5","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5ec213f5-7cf3-49c7-81cc-50b71707a8a8","type":"Segment"},{"attributes":{"plot":{"id":"6c628fdd-f521-4f98-8609-91479e0bc9a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c97a6cf-e090-4ea4-a401-dff2f327d0e8","type":"CategoricalTicker"}},"id":"1cefcf33-0039-4b75-9f4c-e24bff331a9c","type":"Grid"},{"attributes":{},"id":"1c97a6cf-e090-4ea4-a401-dff2f327d0e8","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"197fd315-e52d-4573-8473-4a9c8f19d50a","type":"BasicTickFormatter"},"plot":{"id":"1a750143-fc8c-491f-b82f-fa2a3bc90b58","subtype":"Figure","type":"Plot"},"ticker":{"id":"2524389b-aa8c-4826-af9e-17628d389cf5","type":"BasicTicker"}},"id":"43e638d7-2ca4-4b72-b601-2b1944f1444e","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"cbf15bbc-d592-443c-bc6f-8a8b8556009d","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7abec42d-fe7c-4ced-a10c-14cc89c4746f","type":"HoverTool"}]},"id":"36042fc1-d737-4688-9e4f-f237cb7fe103","type":"Toolbar"},{"attributes":{},"id":"c7f522fe-aeeb-4e79-aec8-e70c875ae138","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c1f06f3-44c8-42c1-bbf4-24b1290d0372","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"6c628fdd-f521-4f98-8609-91479e0bc9a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"6527fcae-1501-4433-9c1d-4677e7e9408f","type":"CategoricalTicker"}},"id":"86803875-6caa-4b4c-9ba8-eefe40d89f56","type":"Grid"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"cd6e24ca-8ad3-45f0-bfe7-8ce040c0c733","type":"Segment"},{"attributes":{"dimension":1,"plot":{"id":"1a750143-fc8c-491f-b82f-fa2a3bc90b58","subtype":"Figure","type":"Plot"},"ticker":{"id":"424d03d4-9bb2-4ee1-bf11-5c768d893031","type":"CategoricalTicker"}},"id":"130e16d3-3815-4ef7-a991-aecdb75c85f0","type":"Grid"},{"attributes":{"below":[{"id":"ea8901be-f85d-40ab-b414-ca9eaae8d533","type":"CategoricalAxis"}],"left":[{"id":"d121f846-c7a1-4a5e-8255-2ebf5c9f30ad","type":"CategoricalAxis"}],"renderers":[{"id":"ea8901be-f85d-40ab-b414-ca9eaae8d533","type":"CategoricalAxis"},{"id":"1cefcf33-0039-4b75-9f4c-e24bff331a9c","type":"Grid"},{"id":"d121f846-c7a1-4a5e-8255-2ebf5c9f30ad","type":"CategoricalAxis"},{"id":"86803875-6caa-4b4c-9ba8-eefe40d89f56","type":"Grid"},{"id":"74701096-1e0b-46d5-acad-f39e9e50353b","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"cbf15bbc-d592-443c-bc6f-8a8b8556009d","type":"Title"},"tool_events":{"id":"3f3c1bc7-312d-4ac3-aaf7-621a87d4197e","type":"ToolEvents"},"toolbar":{"id":"36042fc1-d737-4688-9e4f-f237cb7fe103","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c8c2f6f8-f9c1-4cfd-bca3-587a4ae23359","type":"FactorRange"},"y_range":{"id":"21210f77-877b-49f1-9a5e-407ae0fe67ab","type":"FactorRange"}},"id":"6c628fdd-f521-4f98-8609-91479e0bc9a1","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"1cd1d8c3-3dc5-4de3-afa2-a20a807d9b2b","type":"ColumnDataSource"},"glyph":{"id":"10241a7f-dd92-4d99-8bb4-9830d1869a5d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7c1f06f3-44c8-42c1-bbf4-24b1290d0372","type":"Circle"},"selection_glyph":null},"id":"71447974-147a-4479-b48d-eb10209465d5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y1","y0","x1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"1b6b84c9-1d1d-470f-8339-3f2622fbbe56","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1b6b84c9-1d1d-470f-8339-3f2622fbbe56","type":"ColumnDataSource"},"glyph":{"id":"cd6e24ca-8ad3-45f0-bfe7-8ce040c0c733","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"5ec213f5-7cf3-49c7-81cc-50b71707a8a8","type":"Segment"},"selection_glyph":null},"id":"9ea864f3-9af7-4a5e-bf3d-3f3b3da7d339","type":"GlyphRenderer"},{"attributes":{},"id":"424d03d4-9bb2-4ee1-bf11-5c768d893031","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["x","y","line_color","fill_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"cef4646e-5852-424d-9968-a0d463a6b998","type":"ColumnDataSource"},{"attributes":{},"id":"6527fcae-1501-4433-9c1d-4677e7e9408f","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a23b6f31-1338-4bce-a65a-dda86dff1ff5","type":"Toolbar"},{"attributes":{"formatter":{"id":"5d615dfb-d4a2-4f3b-b067-1e9be9f6922d","type":"CategoricalTickFormatter"},"plot":{"id":"6c628fdd-f521-4f98-8609-91479e0bc9a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c97a6cf-e090-4ea4-a401-dff2f327d0e8","type":"CategoricalTicker"}},"id":"ea8901be-f85d-40ab-b414-ca9eaae8d533","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"41748320-2e09-45e6-a9a5-6e81211a73ca","type":"Rect"},{"attributes":{"callback":null,"plot":{"id":"6c628fdd-f521-4f98-8609-91479e0bc9a1","subtype":"Figure","type":"Plot"}},"id":"7abec42d-fe7c-4ced-a10c-14cc89c4746f","type":"HoverTool"},{"attributes":{},"id":"9c3ac62f-9176-49aa-9334-3046770410fb","type":"ToolEvents"},{"attributes":{"plot":{"id":"1a750143-fc8c-491f-b82f-fa2a3bc90b58","subtype":"Figure","type":"Plot"},"ticker":{"id":"2524389b-aa8c-4826-af9e-17628d389cf5","type":"BasicTicker"}},"id":"8c21a717-19c3-4522-8550-8c6da2b0e2cb","type":"Grid"}],"root_ids":["61435341-314d-4ff8-930e-9be62e881fc0"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"2b458bea-35d9-43e4-8be2-d6160df314c6","elementid":"b09d6bc9-0eff-4a2a-9fca-8d828916b017","modelid":"61435341-314d-4ff8-930e-9be62e881fc0"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});