document.addEventListener("DOMContentLoaded", function(event) {
    
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
      };var element = document.getElementById("3da59f19-59d3-424a-8b83-be9dc443ddad");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3da59f19-59d3-424a-8b83-be9dc443ddad' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"408ad730-4ab3-4620-b780-eebe9c3c96a2":{"roots":{"references":[{"attributes":{"callback":null},"id":"cb5ab036-8fc7-407f-abc6-06119708e4ae","type":"DataRange1d"},{"attributes":{"callback":null},"id":"b00492a9-3b54-47e9-9410-d61ec19d4737","type":"DataRange1d"},{"attributes":{"formatter":{"id":"3592f973-9884-40d6-a9b0-2f0385306394","type":"BasicTickFormatter"},"plot":{"id":"ae7e71bb-097a-475d-a166-d7c40ff48ea8","type":"Plot"},"ticker":{"id":"5abecddc-4c55-48e2-917a-6e6996f65879","type":"BasicTicker"}},"id":"e0f7bd7f-c210-456b-9f26-c0f43f41c6b3","type":"LinearAxis"},{"attributes":{},"id":"f450c0e6-086d-4c3a-89b6-1e8853c73a78","type":"BasicTicker"},{"attributes":{},"id":"32000f00-12f4-41aa-94c7-17e40f3e37c7","type":"BasicTickFormatter"},{"attributes":{},"id":"93c235c1-e943-41e0-84ec-585091800259","type":"ToolEvents"},{"attributes":{"plot":{"id":"ae7e71bb-097a-475d-a166-d7c40ff48ea8","type":"Plot"},"ticker":{"id":"f450c0e6-086d-4c3a-89b6-1e8853c73a78","type":"BasicTicker"}},"id":"64a84445-78fe-4e25-9a8b-0e5ac7cb4dbe","type":"Grid"},{"attributes":{"formatter":{"id":"32000f00-12f4-41aa-94c7-17e40f3e37c7","type":"BasicTickFormatter"},"plot":{"id":"ae7e71bb-097a-475d-a166-d7c40ff48ea8","type":"Plot"},"ticker":{"id":"f450c0e6-086d-4c3a-89b6-1e8853c73a78","type":"BasicTicker"}},"id":"edac6c9a-3759-48c7-8600-c1f0e638296d","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5d409011-e69b-4688-a89c-204d2e35804d","type":"Toolbar"},{"attributes":{"below":[{"id":"edac6c9a-3759-48c7-8600-c1f0e638296d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e0f7bd7f-c210-456b-9f26-c0f43f41c6b3","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3484e55a-27d9-41d3-af37-ee7a32d0cc64","type":"GlyphRenderer"},{"id":"edac6c9a-3759-48c7-8600-c1f0e638296d","type":"LinearAxis"},{"id":"e0f7bd7f-c210-456b-9f26-c0f43f41c6b3","type":"LinearAxis"},{"id":"64a84445-78fe-4e25-9a8b-0e5ac7cb4dbe","type":"Grid"},{"id":"a46b9184-aeb8-4a52-9dfb-cc1373f47119","type":"Grid"}],"title":null,"tool_events":{"id":"93c235c1-e943-41e0-84ec-585091800259","type":"ToolEvents"},"toolbar":{"id":"5d409011-e69b-4688-a89c-204d2e35804d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cb5ab036-8fc7-407f-abc6-06119708e4ae","type":"DataRange1d"},"y_range":{"id":"b00492a9-3b54-47e9-9410-d61ec19d4737","type":"DataRange1d"}},"id":"ae7e71bb-097a-475d-a166-d7c40ff48ea8","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"ae7e71bb-097a-475d-a166-d7c40ff48ea8","type":"Plot"},"ticker":{"id":"5abecddc-4c55-48e2-917a-6e6996f65879","type":"BasicTicker"}},"id":"a46b9184-aeb8-4a52-9dfb-cc1373f47119","type":"Grid"},{"attributes":{},"id":"5abecddc-4c55-48e2-917a-6e6996f65879","type":"BasicTicker"},{"attributes":{"data_source":{"id":"69c9f432-ed10-41bf-8071-54a7c8629286","type":"ColumnDataSource"},"glyph":{"id":"29c17b9b-719a-4136-b5e5-5efd8957f8d6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3484e55a-27d9-41d3-af37-ee7a32d0cc64","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","h","w","x"],"data":{"h":[0.5,0.4125,0.35,0.3125,0.3,0.3125,0.35,0.4125,0.5],"w":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"69c9f432-ed10-41bf-8071-54a7c8629286","type":"ColumnDataSource"},{"attributes":{},"id":"3592f973-9884-40d6-a9b0-2f0385306394","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"29c17b9b-719a-4136-b5e5-5efd8957f8d6","type":"Rect"}],"root_ids":["ae7e71bb-097a-475d-a166-d7c40ff48ea8"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"408ad730-4ab3-4620-b780-eebe9c3c96a2","elementid":"3da59f19-59d3-424a-8b83-be9dc443ddad","modelid":"ae7e71bb-097a-475d-a166-d7c40ff48ea8"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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