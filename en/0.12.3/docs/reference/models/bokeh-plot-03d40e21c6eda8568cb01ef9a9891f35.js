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
      };var element = document.getElementById("bf702762-721c-442b-9c39-0b8b66f92be8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bf702762-721c-442b-9c39-0b8b66f92be8' but no matching script tag was found. ")
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
                  var docs_json = {"eefb7ab7-4abf-472e-ba14-209365cb1ce7":{"roots":{"references":[{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"194c3dbc-d391-4d0e-81b9-52041f98714f","type":"Rect"},{"attributes":{"formatter":{"id":"c79950bc-23ea-4b62-b300-e00e8fd8b0e3","type":"BasicTickFormatter"},"plot":{"id":"dce04fc6-6d50-4d81-92d4-948e6507a0e7","type":"Plot"},"ticker":{"id":"f9d2bc38-732d-4fa7-a5f0-c77dc5b34d52","type":"BasicTicker"}},"id":"d42d5f4c-38ae-495e-b078-dcebd4584a69","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"dce04fc6-6d50-4d81-92d4-948e6507a0e7","type":"Plot"},"ticker":{"id":"e8857c7e-9071-4a36-96e4-78a5398e1fec","type":"BasicTicker"}},"id":"60b27a75-1100-4505-bc1d-4f1e806c3f02","type":"Grid"},{"attributes":{"callback":null},"id":"b4d9a1c2-8887-4962-8bf8-04e4cda65c9a","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"244de2f6-dd04-4b4b-bd9b-184e54656c45","type":"Toolbar"},{"attributes":{},"id":"c79950bc-23ea-4b62-b300-e00e8fd8b0e3","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a422fba4-4e3d-4411-bfe8-f32ce784fd47","type":"ColumnDataSource"},"glyph":{"id":"194c3dbc-d391-4d0e-81b9-52041f98714f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"db458e01-798f-4dae-b7b8-a966453fa888","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","h","w","x"],"data":{"h":[0.5,0.4125,0.35,0.3125,0.3,0.3125,0.35,0.4125,0.5],"w":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"a422fba4-4e3d-4411-bfe8-f32ce784fd47","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"dce04fc6-6d50-4d81-92d4-948e6507a0e7","type":"Plot"},"ticker":{"id":"f9d2bc38-732d-4fa7-a5f0-c77dc5b34d52","type":"BasicTicker"}},"id":"945dd452-707d-415b-9d4b-2ceb2d0a51ae","type":"Grid"},{"attributes":{"formatter":{"id":"22c86e4c-32dc-4fa5-b157-34a585cc5f6b","type":"BasicTickFormatter"},"plot":{"id":"dce04fc6-6d50-4d81-92d4-948e6507a0e7","type":"Plot"},"ticker":{"id":"e8857c7e-9071-4a36-96e4-78a5398e1fec","type":"BasicTicker"}},"id":"ff62c031-5c46-4c5a-afc9-4b2fdbd23622","type":"LinearAxis"},{"attributes":{"below":[{"id":"d42d5f4c-38ae-495e-b078-dcebd4584a69","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ff62c031-5c46-4c5a-afc9-4b2fdbd23622","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"db458e01-798f-4dae-b7b8-a966453fa888","type":"GlyphRenderer"},{"id":"d42d5f4c-38ae-495e-b078-dcebd4584a69","type":"LinearAxis"},{"id":"ff62c031-5c46-4c5a-afc9-4b2fdbd23622","type":"LinearAxis"},{"id":"945dd452-707d-415b-9d4b-2ceb2d0a51ae","type":"Grid"},{"id":"60b27a75-1100-4505-bc1d-4f1e806c3f02","type":"Grid"}],"title":null,"tool_events":{"id":"39b8125a-235f-4040-b6eb-024907b31a0e","type":"ToolEvents"},"toolbar":{"id":"244de2f6-dd04-4b4b-bd9b-184e54656c45","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c2d9ab64-fd79-44c8-ad46-86edd04282e3","type":"DataRange1d"},"y_range":{"id":"b4d9a1c2-8887-4962-8bf8-04e4cda65c9a","type":"DataRange1d"}},"id":"dce04fc6-6d50-4d81-92d4-948e6507a0e7","type":"Plot"},{"attributes":{"callback":null},"id":"c2d9ab64-fd79-44c8-ad46-86edd04282e3","type":"DataRange1d"},{"attributes":{},"id":"e8857c7e-9071-4a36-96e4-78a5398e1fec","type":"BasicTicker"},{"attributes":{},"id":"f9d2bc38-732d-4fa7-a5f0-c77dc5b34d52","type":"BasicTicker"},{"attributes":{},"id":"39b8125a-235f-4040-b6eb-024907b31a0e","type":"ToolEvents"},{"attributes":{},"id":"22c86e4c-32dc-4fa5-b157-34a585cc5f6b","type":"BasicTickFormatter"}],"root_ids":["dce04fc6-6d50-4d81-92d4-948e6507a0e7"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"eefb7ab7-4abf-472e-ba14-209365cb1ce7","elementid":"bf702762-721c-442b-9c39-0b8b66f92be8","modelid":"dce04fc6-6d50-4d81-92d4-948e6507a0e7"}];
                  
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