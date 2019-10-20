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
      };var element = document.getElementById("be12304d-eef2-4354-806c-f00a68b3c058");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'be12304d-eef2-4354-806c-f00a68b3c058' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"55b2290d-33fa-48e4-a3eb-0a311de724e8":{"roots":{"references":[{"attributes":{"formatter":{"id":"cc65ff74-101b-4d1d-a7ab-8e9038fbaa72","type":"BasicTickFormatter"},"plot":{"id":"c835cfd9-47e3-4c77-82e5-bbe515bd62d2","type":"Plot"},"ticker":{"id":"f529aa8a-db69-4c97-aa0a-abbac2af01b8","type":"BasicTicker"}},"id":"0e834ddc-7105-41fd-9fca-1b4acc20c08d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2ab4ea9c-3e89-45b0-bb28-7e6f340964cf","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"c835cfd9-47e3-4c77-82e5-bbe515bd62d2","type":"Plot"},"ticker":{"id":"92c67877-d2fa-482d-9fc5-4fbbdccaf358","type":"BasicTicker"}},"id":"38257790-6b15-4106-976b-94d279a79fc7","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"fd4a9064-5f0b-4c80-9a6a-fc810866957d","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"fc275b16-b66d-4180-864d-68394588aa7b","type":"ColumnDataSource"},{"attributes":{},"id":"92c67877-d2fa-482d-9fc5-4fbbdccaf358","type":"BasicTicker"},{"attributes":{},"id":"f529aa8a-db69-4c97-aa0a-abbac2af01b8","type":"BasicTicker"},{"attributes":{"plot":{"id":"c835cfd9-47e3-4c77-82e5-bbe515bd62d2","type":"Plot"},"ticker":{"id":"f529aa8a-db69-4c97-aa0a-abbac2af01b8","type":"BasicTicker"}},"id":"f63c0d6b-c2ba-4532-89ef-b16497ab5ad4","type":"Grid"},{"attributes":{"below":[{"id":"0e834ddc-7105-41fd-9fca-1b4acc20c08d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"038354a2-50ff-40ff-b7d3-80977dc31052","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"09fe21cd-34f4-426d-9d4f-6426178aae5d","type":"GlyphRenderer"},{"id":"0e834ddc-7105-41fd-9fca-1b4acc20c08d","type":"LinearAxis"},{"id":"038354a2-50ff-40ff-b7d3-80977dc31052","type":"LinearAxis"},{"id":"f63c0d6b-c2ba-4532-89ef-b16497ab5ad4","type":"Grid"},{"id":"38257790-6b15-4106-976b-94d279a79fc7","type":"Grid"}],"title":null,"tool_events":{"id":"ee9829d0-81ff-4e62-a68e-9c5629e54d89","type":"ToolEvents"},"toolbar":{"id":"fd4a9064-5f0b-4c80-9a6a-fc810866957d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d4c595fb-8283-4f82-804e-9fb8bfab7b4c","type":"DataRange1d"},"y_range":{"id":"2ab4ea9c-3e89-45b0-bb28-7e6f340964cf","type":"DataRange1d"}},"id":"c835cfd9-47e3-4c77-82e5-bbe515bd62d2","type":"Plot"},{"attributes":{},"id":"ee9829d0-81ff-4e62-a68e-9c5629e54d89","type":"ToolEvents"},{"attributes":{"callback":null},"id":"d4c595fb-8283-4f82-804e-9fb8bfab7b4c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"2b71563d-bd61-42f3-8076-76be69dfbeba","type":"BasicTickFormatter"},"plot":{"id":"c835cfd9-47e3-4c77-82e5-bbe515bd62d2","type":"Plot"},"ticker":{"id":"92c67877-d2fa-482d-9fc5-4fbbdccaf358","type":"BasicTicker"}},"id":"038354a2-50ff-40ff-b7d3-80977dc31052","type":"LinearAxis"},{"attributes":{"data_source":{"id":"fc275b16-b66d-4180-864d-68394588aa7b","type":"ColumnDataSource"},"glyph":{"id":"a1f5f167-fbb2-42ab-8170-5a068b632c68","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"09fe21cd-34f4-426d-9d4f-6426178aae5d","type":"GlyphRenderer"},{"attributes":{},"id":"cc65ff74-101b-4d1d-a7ab-8e9038fbaa72","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"a1f5f167-fbb2-42ab-8170-5a068b632c68","type":"Wedge"},{"attributes":{},"id":"2b71563d-bd61-42f3-8076-76be69dfbeba","type":"BasicTickFormatter"}],"root_ids":["c835cfd9-47e3-4c77-82e5-bbe515bd62d2"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"55b2290d-33fa-48e4-a3eb-0a311de724e8","elementid":"be12304d-eef2-4354-806c-f00a68b3c058","modelid":"c835cfd9-47e3-4c77-82e5-bbe515bd62d2"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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