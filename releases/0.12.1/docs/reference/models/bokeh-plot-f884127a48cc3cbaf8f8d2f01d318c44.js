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
      };var element = document.getElementById("df5783ef-a1ed-4df9-83a4-e7a0652bf3bc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'df5783ef-a1ed-4df9-83a4-e7a0652bf3bc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"55dcb21a-ac37-41a1-9def-8a9879fbed32":{"roots":{"references":[{"attributes":{"formatter":{"id":"1e9e51d8-87a1-41a6-b4bd-ad6485fe56a0","type":"BasicTickFormatter"},"plot":{"id":"bc14cdfb-1d64-48a7-9458-c2847f50dbfd","type":"Plot"},"ticker":{"id":"469ad451-cd9d-4c80-9212-d3b1ab41286c","type":"BasicTicker"}},"id":"8fd82077-138b-4a3e-bce8-12af541d9fe8","type":"LinearAxis"},{"attributes":{},"id":"1e9e51d8-87a1-41a6-b4bd-ad6485fe56a0","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2f9d5bf7-e0da-4ab9-aab7-6f1e2aa335eb","type":"ColumnDataSource"},"glyph":{"id":"8b48263e-6d8b-498f-86bd-31f346079047","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"36f8a166-2997-4d4a-abe9-bb16733f2778","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"bc14cdfb-1d64-48a7-9458-c2847f50dbfd","type":"Plot"},"ticker":{"id":"e1fb8613-6c31-4f77-ae55-c3ec46d3f35f","type":"BasicTicker"}},"id":"5852167d-05f5-4c3b-93a9-a26698e0cac2","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b48263e-6d8b-498f-86bd-31f346079047","type":"CircleCross"},{"attributes":{},"id":"469ad451-cd9d-4c80-9212-d3b1ab41286c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a233182b-e4bc-420a-919f-f70409e7478b","type":"BasicTickFormatter"},"plot":{"id":"bc14cdfb-1d64-48a7-9458-c2847f50dbfd","type":"Plot"},"ticker":{"id":"e1fb8613-6c31-4f77-ae55-c3ec46d3f35f","type":"BasicTicker"}},"id":"cc527744-1b9d-4ca7-9cf1-0b5cf3323552","type":"LinearAxis"},{"attributes":{},"id":"8157b75f-e7b6-4685-9d37-f2ad8e0b1710","type":"ToolEvents"},{"attributes":{"callback":null},"id":"70e8b2a8-99e3-4fd7-9564-d8b9218613a7","type":"DataRange1d"},{"attributes":{"below":[{"id":"8fd82077-138b-4a3e-bce8-12af541d9fe8","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"cc527744-1b9d-4ca7-9cf1-0b5cf3323552","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"36f8a166-2997-4d4a-abe9-bb16733f2778","type":"GlyphRenderer"},{"id":"8fd82077-138b-4a3e-bce8-12af541d9fe8","type":"LinearAxis"},{"id":"cc527744-1b9d-4ca7-9cf1-0b5cf3323552","type":"LinearAxis"},{"id":"25def031-f4dc-49b2-bef6-4ce563666ac1","type":"Grid"},{"id":"5852167d-05f5-4c3b-93a9-a26698e0cac2","type":"Grid"}],"title":null,"tool_events":{"id":"8157b75f-e7b6-4685-9d37-f2ad8e0b1710","type":"ToolEvents"},"toolbar":{"id":"64160003-883c-496e-b2a9-74acaff9a9a5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b4252298-786e-436e-a893-f563fe1f5fd6","type":"DataRange1d"},"y_range":{"id":"70e8b2a8-99e3-4fd7-9564-d8b9218613a7","type":"DataRange1d"}},"id":"bc14cdfb-1d64-48a7-9458-c2847f50dbfd","type":"Plot"},{"attributes":{"plot":{"id":"bc14cdfb-1d64-48a7-9458-c2847f50dbfd","type":"Plot"},"ticker":{"id":"469ad451-cd9d-4c80-9212-d3b1ab41286c","type":"BasicTicker"}},"id":"25def031-f4dc-49b2-bef6-4ce563666ac1","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"2f9d5bf7-e0da-4ab9-aab7-6f1e2aa335eb","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"64160003-883c-496e-b2a9-74acaff9a9a5","type":"Toolbar"},{"attributes":{"callback":null},"id":"b4252298-786e-436e-a893-f563fe1f5fd6","type":"DataRange1d"},{"attributes":{},"id":"e1fb8613-6c31-4f77-ae55-c3ec46d3f35f","type":"BasicTicker"},{"attributes":{},"id":"a233182b-e4bc-420a-919f-f70409e7478b","type":"BasicTickFormatter"}],"root_ids":["bc14cdfb-1d64-48a7-9458-c2847f50dbfd"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"55dcb21a-ac37-41a1-9def-8a9879fbed32","elementid":"df5783ef-a1ed-4df9-83a4-e7a0652bf3bc","modelid":"bc14cdfb-1d64-48a7-9458-c2847f50dbfd"}];
              
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