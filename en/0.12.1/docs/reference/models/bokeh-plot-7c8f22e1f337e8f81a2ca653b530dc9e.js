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
      };var element = document.getElementById("3f07a7e7-6c19-4242-b8a5-d9de546532b5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3f07a7e7-6c19-4242-b8a5-d9de546532b5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"536c7062-df74-4a7d-8b0c-77acc2ddfea7":{"roots":{"references":[{"attributes":{},"id":"80962670-3432-4d0b-aa4b-a818312b64d0","type":"ToolEvents"},{"attributes":{},"id":"fae17c4a-2423-428f-9448-30a9bb32da19","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"9eb8675f-aee9-43b6-bd54-e9ab06d85bb2","type":"DataRange1d"},{"attributes":{},"id":"49af0e0b-8157-4e3f-9418-6b03723c95d2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"da485c9a-f920-4eab-a0c7-c8d804673348","type":"ColumnDataSource"},"glyph":{"id":"8f0689aa-7929-4fc0-b1b0-f65b9f9842cd","type":"Ray"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8976acaf-6ca5-4775-bfcf-4e456b286698","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"49af0e0b-8157-4e3f-9418-6b03723c95d2","type":"BasicTickFormatter"},"plot":{"id":"a14cd3e1-0be6-4f99-9898-d534c7e26274","type":"Plot"},"ticker":{"id":"b5605a3d-3490-4146-a122-3ee1819046d3","type":"BasicTicker"}},"id":"05860b96-1ee3-4eee-ab43-98d8fa51c26b","type":"LinearAxis"},{"attributes":{"below":[{"id":"2396ff39-0f39-4162-b300-10fd7e43c03a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"05860b96-1ee3-4eee-ab43-98d8fa51c26b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"8976acaf-6ca5-4775-bfcf-4e456b286698","type":"GlyphRenderer"},{"id":"2396ff39-0f39-4162-b300-10fd7e43c03a","type":"LinearAxis"},{"id":"05860b96-1ee3-4eee-ab43-98d8fa51c26b","type":"LinearAxis"},{"id":"5549b10a-c4a6-4a49-bc23-a569dfd3ddda","type":"Grid"},{"id":"8e9da121-2662-427c-9ae4-630489fcab1e","type":"Grid"}],"title":null,"tool_events":{"id":"80962670-3432-4d0b-aa4b-a818312b64d0","type":"ToolEvents"},"toolbar":{"id":"c1ffe790-837d-42a1-b585-4cf34c2dbb83","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4e912980-9e00-40c4-9daa-3fc0d735633b","type":"DataRange1d"},"y_range":{"id":"9eb8675f-aee9-43b6-bd54-e9ab06d85bb2","type":"DataRange1d"}},"id":"a14cd3e1-0be6-4f99-9898-d534c7e26274","type":"Plot"},{"attributes":{"plot":{"id":"a14cd3e1-0be6-4f99-9898-d534c7e26274","type":"Plot"},"ticker":{"id":"d1d1563a-0087-49cb-a19d-1cea038161c1","type":"BasicTicker"}},"id":"5549b10a-c4a6-4a49-bc23-a569dfd3ddda","type":"Grid"},{"attributes":{"callback":null},"id":"4e912980-9e00-40c4-9daa-3fc0d735633b","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"a14cd3e1-0be6-4f99-9898-d534c7e26274","type":"Plot"},"ticker":{"id":"b5605a3d-3490-4146-a122-3ee1819046d3","type":"BasicTicker"}},"id":"8e9da121-2662-427c-9ae4-630489fcab1e","type":"Grid"},{"attributes":{},"id":"b5605a3d-3490-4146-a122-3ee1819046d3","type":"BasicTicker"},{"attributes":{},"id":"d1d1563a-0087-49cb-a19d-1cea038161c1","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f0689aa-7929-4fc0-b1b0-f65b9f9842cd","type":"Ray"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c1ffe790-837d-42a1-b585-4cf34c2dbb83","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","l"],"data":{"l":[15.0,17.5,20.0,22.5,25.0,27.5,30.0,32.5,35.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"da485c9a-f920-4eab-a0c7-c8d804673348","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"fae17c4a-2423-428f-9448-30a9bb32da19","type":"BasicTickFormatter"},"plot":{"id":"a14cd3e1-0be6-4f99-9898-d534c7e26274","type":"Plot"},"ticker":{"id":"d1d1563a-0087-49cb-a19d-1cea038161c1","type":"BasicTicker"}},"id":"2396ff39-0f39-4162-b300-10fd7e43c03a","type":"LinearAxis"}],"root_ids":["a14cd3e1-0be6-4f99-9898-d534c7e26274"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"536c7062-df74-4a7d-8b0c-77acc2ddfea7","elementid":"3f07a7e7-6c19-4242-b8a5-d9de546532b5","modelid":"a14cd3e1-0be6-4f99-9898-d534c7e26274"}];
              
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