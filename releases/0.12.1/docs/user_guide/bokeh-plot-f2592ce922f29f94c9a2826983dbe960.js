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
      };var element = document.getElementById("d5bec556-663a-4134-a345-df2f98e3ab76");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd5bec556-663a-4134-a345-df2f98e3ab76' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"0edc2bdb-57e8-487f-a179-b4a6206f9799":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"48474568-aae3-427e-943d-54928b0d879b","type":"ColumnDataSource"},{"attributes":{},"id":"65fc9e6a-c881-4c0a-ab2a-a2805500bf69","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"}},"id":"622a1bdc-6331-496e-82d1-48cac336d76c","type":"HelpTool"},{"attributes":{"data_source":{"id":"48474568-aae3-427e-943d-54928b0d879b","type":"ColumnDataSource"},"glyph":{"id":"dd12315f-00ad-4880-af47-479ffd8c268d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a0f2496c-8541-4ff5-8f97-4b5b5c48d7ca","type":"Circle"},"selection_glyph":null},"id":"a17e988e-278b-4279-b96f-751863ea9727","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"65fc9e6a-c881-4c0a-ab2a-a2805500bf69","type":"BasicTickFormatter"},"plot":{"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"},"ticker":{"id":"41e5f5bf-de5a-4543-83dd-f0a4292c3f5c","type":"BasicTicker"}},"id":"413eb3a8-2385-4222-906d-b5d43564c447","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0f2496c-8541-4ff5-8f97-4b5b5c48d7ca","type":"Circle"},{"attributes":{},"id":"cbeecc72-3a74-4e42-bd5c-cdcaacd73786","type":"ToolEvents"},{"attributes":{"plot":{"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"}},"id":"6f3af02a-0dac-48f4-8ba3-d73ef72073bd","type":"ResetTool"},{"attributes":{"callback":null},"id":"e0101492-9de6-497a-b461-8c44f8ab594c","type":"DataRange1d"},{"attributes":{"plot":{"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"}},"id":"b953b377-ed5d-40c5-b540-60f7862e3868","type":"PanTool"},{"attributes":{},"id":"41e5f5bf-de5a-4543-83dd-f0a4292c3f5c","type":"BasicTicker"},{"attributes":{"plot":{"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"},"ticker":{"id":"38b118dd-d078-4a83-890f-4a0107c07ba3","type":"BasicTicker"}},"id":"fbe63834-d3b4-4d62-ac15-e65c199db1c9","type":"Grid"},{"attributes":{},"id":"38b118dd-d078-4a83-890f-4a0107c07ba3","type":"BasicTicker"},{"attributes":{"plot":{"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"}},"id":"413f57dc-bc20-4571-a2c8-44664f86346c","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"303a4347-730c-4e5d-9c8d-488e5b1e7f2c","type":"Title"},{"attributes":{"overlay":{"id":"448b8fff-c18c-437d-acb1-30fbf06337de","type":"BoxAnnotation"},"plot":{"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"}},"id":"4f6969eb-36a9-4fb5-b3a0-98ee7c989dea","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"448b8fff-c18c-437d-acb1-30fbf06337de","type":"BoxAnnotation"},{"attributes":{},"id":"db247eb0-542e-4a52-8ac7-f4620c2763cd","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"},"ticker":{"id":"41e5f5bf-de5a-4543-83dd-f0a4292c3f5c","type":"BasicTicker"}},"id":"1529c4d2-000a-4bef-8794-b607495e7f6a","type":"Grid"},{"attributes":{"formatter":{"id":"db247eb0-542e-4a52-8ac7-f4620c2763cd","type":"BasicTickFormatter"},"plot":{"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"},"ticker":{"id":"38b118dd-d078-4a83-890f-4a0107c07ba3","type":"BasicTicker"}},"id":"329ec537-e52e-4906-b7d3-7c6a1c28b199","type":"LinearAxis"},{"attributes":{"below":[{"id":"329ec537-e52e-4906-b7d3-7c6a1c28b199","type":"LinearAxis"}],"left":[{"id":"413eb3a8-2385-4222-906d-b5d43564c447","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"329ec537-e52e-4906-b7d3-7c6a1c28b199","type":"LinearAxis"},{"id":"fbe63834-d3b4-4d62-ac15-e65c199db1c9","type":"Grid"},{"id":"413eb3a8-2385-4222-906d-b5d43564c447","type":"LinearAxis"},{"id":"1529c4d2-000a-4bef-8794-b607495e7f6a","type":"Grid"},{"id":"448b8fff-c18c-437d-acb1-30fbf06337de","type":"BoxAnnotation"},{"id":"a17e988e-278b-4279-b96f-751863ea9727","type":"GlyphRenderer"}],"title":{"id":"303a4347-730c-4e5d-9c8d-488e5b1e7f2c","type":"Title"},"tool_events":{"id":"cbeecc72-3a74-4e42-bd5c-cdcaacd73786","type":"ToolEvents"},"toolbar":{"id":"590e1a4f-954e-4008-b714-3a951dd7ed66","type":"Toolbar"},"x_range":{"id":"7fe0b417-8b77-4ee5-9961-8797f63b39d3","type":"DataRange1d"},"y_range":{"id":"e0101492-9de6-497a-b461-8c44f8ab594c","type":"DataRange1d"}},"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"e40089d0-1d7d-4a9c-9b9a-60dff7284907","subtype":"Figure","type":"Plot"}},"id":"9cb6fc37-0313-42b9-a727-f242c6be32e4","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b953b377-ed5d-40c5-b540-60f7862e3868","type":"PanTool"},{"id":"413f57dc-bc20-4571-a2c8-44664f86346c","type":"WheelZoomTool"},{"id":"4f6969eb-36a9-4fb5-b3a0-98ee7c989dea","type":"BoxZoomTool"},{"id":"9cb6fc37-0313-42b9-a727-f242c6be32e4","type":"SaveTool"},{"id":"6f3af02a-0dac-48f4-8ba3-d73ef72073bd","type":"ResetTool"},{"id":"622a1bdc-6331-496e-82d1-48cac336d76c","type":"HelpTool"}]},"id":"590e1a4f-954e-4008-b714-3a951dd7ed66","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd12315f-00ad-4880-af47-479ffd8c268d","type":"Circle"},{"attributes":{"callback":null},"id":"7fe0b417-8b77-4ee5-9961-8797f63b39d3","type":"DataRange1d"}],"root_ids":["e40089d0-1d7d-4a9c-9b9a-60dff7284907"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"0edc2bdb-57e8-487f-a179-b4a6206f9799","elementid":"d5bec556-663a-4134-a345-df2f98e3ab76","modelid":"e40089d0-1d7d-4a9c-9b9a-60dff7284907"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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