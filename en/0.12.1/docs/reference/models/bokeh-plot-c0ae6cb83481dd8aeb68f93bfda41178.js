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
      };var element = document.getElementById("c2c1f802-3994-4e17-a717-1dcd79f49e8c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c2c1f802-3994-4e17-a717-1dcd79f49e8c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"4d811be3-d497-4338-a5ae-eba581f35948":{"roots":{"references":[{"attributes":{"callback":null},"id":"15d099f1-ced4-4a7f-90f3-036e04eeca7d","type":"DataRange1d"},{"attributes":{},"id":"f9cb52ae-274b-40db-85b7-1d50ab88cfb4","type":"BasicTickFormatter"},{"attributes":{},"id":"60c00338-76cf-4bf8-aabf-19a09cab1ca1","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c8502cdb-350a-4245-aa55-3b97a3b64365","type":"Toolbar"},{"attributes":{"formatter":{"id":"f9cb52ae-274b-40db-85b7-1d50ab88cfb4","type":"BasicTickFormatter"},"plot":{"id":"60d69de9-f68e-428b-bb3c-6532796b18f6","type":"Plot"},"ticker":{"id":"60c00338-76cf-4bf8-aabf-19a09cab1ca1","type":"BasicTicker"}},"id":"cf284c63-3902-43b2-8065-e5b08c78ff0f","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b28490a4-4ce8-402f-89bb-766d83e9ef73","type":"DiamondCross"},{"attributes":{"data_source":{"id":"cb2eddce-a814-4352-b250-f399edfce86c","type":"ColumnDataSource"},"glyph":{"id":"b28490a4-4ce8-402f-89bb-766d83e9ef73","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0e80bba9-7821-4501-9ad0-5b9d7ea18002","type":"GlyphRenderer"},{"attributes":{},"id":"12f6ad97-370f-421d-9a30-ad2bb95ec43a","type":"BasicTickFormatter"},{"attributes":{},"id":"da40126f-0fa5-41ba-8e92-9f19be950de3","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"60d69de9-f68e-428b-bb3c-6532796b18f6","type":"Plot"},"ticker":{"id":"008c3090-ef91-491a-af27-0b657f443035","type":"BasicTicker"}},"id":"ec1876c0-a5d1-40ad-b6e5-fece89da744e","type":"Grid"},{"attributes":{"formatter":{"id":"12f6ad97-370f-421d-9a30-ad2bb95ec43a","type":"BasicTickFormatter"},"plot":{"id":"60d69de9-f68e-428b-bb3c-6532796b18f6","type":"Plot"},"ticker":{"id":"008c3090-ef91-491a-af27-0b657f443035","type":"BasicTicker"}},"id":"a5b3bb3f-29dc-46ef-8914-a25082024dbf","type":"LinearAxis"},{"attributes":{},"id":"008c3090-ef91-491a-af27-0b657f443035","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"cb2eddce-a814-4352-b250-f399edfce86c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"60d69de9-f68e-428b-bb3c-6532796b18f6","type":"Plot"},"ticker":{"id":"60c00338-76cf-4bf8-aabf-19a09cab1ca1","type":"BasicTicker"}},"id":"af5921c4-120a-4020-8fff-f3dd7a2dd17a","type":"Grid"},{"attributes":{"below":[{"id":"cf284c63-3902-43b2-8065-e5b08c78ff0f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a5b3bb3f-29dc-46ef-8914-a25082024dbf","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0e80bba9-7821-4501-9ad0-5b9d7ea18002","type":"GlyphRenderer"},{"id":"cf284c63-3902-43b2-8065-e5b08c78ff0f","type":"LinearAxis"},{"id":"a5b3bb3f-29dc-46ef-8914-a25082024dbf","type":"LinearAxis"},{"id":"af5921c4-120a-4020-8fff-f3dd7a2dd17a","type":"Grid"},{"id":"ec1876c0-a5d1-40ad-b6e5-fece89da744e","type":"Grid"}],"title":null,"tool_events":{"id":"da40126f-0fa5-41ba-8e92-9f19be950de3","type":"ToolEvents"},"toolbar":{"id":"c8502cdb-350a-4245-aa55-3b97a3b64365","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b3823760-7081-48fe-a132-21719bcb941a","type":"DataRange1d"},"y_range":{"id":"15d099f1-ced4-4a7f-90f3-036e04eeca7d","type":"DataRange1d"}},"id":"60d69de9-f68e-428b-bb3c-6532796b18f6","type":"Plot"},{"attributes":{"callback":null},"id":"b3823760-7081-48fe-a132-21719bcb941a","type":"DataRange1d"}],"root_ids":["60d69de9-f68e-428b-bb3c-6532796b18f6"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"4d811be3-d497-4338-a5ae-eba581f35948","elementid":"c2c1f802-3994-4e17-a717-1dcd79f49e8c","modelid":"60d69de9-f68e-428b-bb3c-6532796b18f6"}];
              
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