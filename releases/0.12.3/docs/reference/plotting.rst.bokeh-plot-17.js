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
      };var element = document.getElementById("0e9d9398-7066-40c4-90e4-7dd2dfab3ba1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0e9d9398-7066-40c4-90e4-7dd2dfab3ba1' but no matching script tag was found. ")
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
                  var docs_json = {"0fb08a6c-6ab9-4c70-a905-eef5ca4d286b":{"roots":{"references":[{"attributes":{},"id":"33780bf5-bb1d-4325-8b4c-0b06b828ee9e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"}},"id":"f0d2affd-a3bb-415b-a28e-cb73b302277c","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9bfc5d83-5c8b-4ab8-8bf8-1a21bf8c95dc","type":"BoxAnnotation"},{"attributes":{},"id":"d6abb82a-83ab-4795-94e8-25e7675b3a31","type":"BasicTicker"},{"attributes":{},"id":"292bf4f5-532c-4819-acdf-eb2abf3818a3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"33780bf5-bb1d-4325-8b4c-0b06b828ee9e","type":"BasicTickFormatter"},"plot":{"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"},"ticker":{"id":"292bf4f5-532c-4819-acdf-eb2abf3818a3","type":"BasicTicker"}},"id":"0350de45-deb1-42a8-a42b-a4fbc962d300","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"018e1c6e-a982-45c1-aea5-6418cff1313b","type":"Title"},{"attributes":{"plot":{"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"},"ticker":{"id":"292bf4f5-532c-4819-acdf-eb2abf3818a3","type":"BasicTicker"}},"id":"31e942d2-ea4d-4c88-ab1e-fbe7866075a7","type":"Grid"},{"attributes":{"plot":{"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"}},"id":"8f24cc02-82f0-4d3b-8e27-bfa7a69a2980","type":"SaveTool"},{"attributes":{"plot":{"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"}},"id":"590dd76b-8064-48ad-b62a-82057565145e","type":"WheelZoomTool"},{"attributes":{},"id":"0141bfd8-298d-49b9-a7c2-30035db2c300","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b317e612-1450-400f-a02a-232b7997ef8e","type":"Ray"},{"attributes":{"plot":{"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"}},"id":"8cf281ab-3d94-4331-962f-202d60f713d3","type":"HelpTool"},{"attributes":{"callback":null},"id":"746782ee-fef4-4ef1-a642-4e606df0a247","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0141bfd8-298d-49b9-a7c2-30035db2c300","type":"BasicTickFormatter"},"plot":{"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6abb82a-83ab-4795-94e8-25e7675b3a31","type":"BasicTicker"}},"id":"ebb0a551-d3b1-4850-a8be-c7e40ac903bd","type":"LinearAxis"},{"attributes":{},"id":"2131537c-2133-4092-8b8d-cba5e6d2eafb","type":"ToolEvents"},{"attributes":{"overlay":{"id":"9bfc5d83-5c8b-4ab8-8bf8-1a21bf8c95dc","type":"BoxAnnotation"},"plot":{"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"}},"id":"a67f8c9b-cde6-4277-884e-1b0b11f7bc24","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"0350de45-deb1-42a8-a42b-a4fbc962d300","type":"LinearAxis"}],"left":[{"id":"ebb0a551-d3b1-4850-a8be-c7e40ac903bd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0350de45-deb1-42a8-a42b-a4fbc962d300","type":"LinearAxis"},{"id":"31e942d2-ea4d-4c88-ab1e-fbe7866075a7","type":"Grid"},{"id":"ebb0a551-d3b1-4850-a8be-c7e40ac903bd","type":"LinearAxis"},{"id":"2b855e85-633e-4d4d-8328-1daab8c305ca","type":"Grid"},{"id":"9bfc5d83-5c8b-4ab8-8bf8-1a21bf8c95dc","type":"BoxAnnotation"},{"id":"9613d71d-5085-470c-8da6-8a25e1e5d15d","type":"GlyphRenderer"}],"title":{"id":"018e1c6e-a982-45c1-aea5-6418cff1313b","type":"Title"},"tool_events":{"id":"2131537c-2133-4092-8b8d-cba5e6d2eafb","type":"ToolEvents"},"toolbar":{"id":"57965166-4f31-493b-9f98-d720885cae99","type":"Toolbar"},"x_range":{"id":"746782ee-fef4-4ef1-a642-4e606df0a247","type":"DataRange1d"},"y_range":{"id":"4a6abf19-fbb4-4c56-a64c-8eb0a1f9abf2","type":"DataRange1d"}},"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"25b16bbb-30db-4bc7-b869-7d67ee8b222c","type":"PanTool"},{"id":"590dd76b-8064-48ad-b62a-82057565145e","type":"WheelZoomTool"},{"id":"a67f8c9b-cde6-4277-884e-1b0b11f7bc24","type":"BoxZoomTool"},{"id":"8f24cc02-82f0-4d3b-8e27-bfa7a69a2980","type":"SaveTool"},{"id":"f0d2affd-a3bb-415b-a28e-cb73b302277c","type":"ResetTool"},{"id":"8cf281ab-3d94-4331-962f-202d60f713d3","type":"HelpTool"}]},"id":"57965166-4f31-493b-9f98-d720885cae99","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6abb82a-83ab-4795-94e8-25e7675b3a31","type":"BasicTicker"}},"id":"2b855e85-633e-4d4d-8328-1daab8c305ca","type":"Grid"},{"attributes":{"callback":null},"id":"4a6abf19-fbb4-4c56-a64c-8eb0a1f9abf2","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d60294e5-17fd-4922-8515-45fc47210fe9","type":"Ray"},{"attributes":{"data_source":{"id":"a7251f36-2e75-4e25-8da6-f839c78772f9","type":"ColumnDataSource"},"glyph":{"id":"b317e612-1450-400f-a02a-232b7997ef8e","type":"Ray"},"hover_glyph":null,"nonselection_glyph":{"id":"d60294e5-17fd-4922-8515-45fc47210fe9","type":"Ray"},"selection_glyph":null},"id":"9613d71d-5085-470c-8da6-8a25e1e5d15d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"a7251f36-2e75-4e25-8da6-f839c78772f9","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b571e2f0-e114-43d4-b773-5679eec19800","subtype":"Figure","type":"Plot"}},"id":"25b16bbb-30db-4bc7-b869-7d67ee8b222c","type":"PanTool"}],"root_ids":["b571e2f0-e114-43d4-b773-5679eec19800"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"0fb08a6c-6ab9-4c70-a905-eef5ca4d286b","elementid":"0e9d9398-7066-40c4-90e4-7dd2dfab3ba1","modelid":"b571e2f0-e114-43d4-b773-5679eec19800"}];
                  
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