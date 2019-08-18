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
      };var element = document.getElementById("35856979-ddeb-4c85-a49c-51709ca5ffa9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '35856979-ddeb-4c85-a49c-51709ca5ffa9' but no matching script tag was found. ")
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
                  var docs_json = {"1864a28f-e8c8-4039-b864-f4edf538967b":{"roots":{"references":[{"attributes":{"below":[{"id":"eac38012-8225-42b2-be12-e7697bdd47fe","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2dd7d1c7-9ebc-4cfb-8385-3dcffa6ed1ae","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"85d62618-1b61-4705-9af8-578d20b3364f","type":"GlyphRenderer"},{"id":"eac38012-8225-42b2-be12-e7697bdd47fe","type":"LinearAxis"},{"id":"2dd7d1c7-9ebc-4cfb-8385-3dcffa6ed1ae","type":"LinearAxis"},{"id":"adc677f6-51ff-4a4d-9d6e-a18c8d256a28","type":"Grid"},{"id":"41f44550-a3bf-4f3e-b919-410c0a2e8855","type":"Grid"}],"title":null,"tool_events":{"id":"95ed39a6-3340-4235-8aba-562b2ef140ae","type":"ToolEvents"},"toolbar":{"id":"a789f282-16ff-4d51-9ff5-fb1e4cde55e8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f8a273a8-5d2a-4385-b163-bda76dfe7c69","type":"DataRange1d"},"y_range":{"id":"700af4fc-78e9-4c1b-8bed-308ead018796","type":"DataRange1d"}},"id":"87001afd-fb32-414d-998d-a03ef434d30b","type":"Plot"},{"attributes":{},"id":"d8985028-6bca-4ca7-8691-459539396d13","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"87001afd-fb32-414d-998d-a03ef434d30b","type":"Plot"},"ticker":{"id":"6571da6d-1e4f-4fd9-9da0-aa629b7c2703","type":"BasicTicker"}},"id":"41f44550-a3bf-4f3e-b919-410c0a2e8855","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","ym01","yp01","xm01","x","xp01","xp02"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xm01":[-2.1,-1.6,-1.1,-0.6,-0.1,0.4,0.9,1.4,1.9],"xp01":[-1.9,-1.4,-0.9,-0.4,0.1,0.6,1.1,1.6,2.1],"xp02":[-1.6,-1.1,-0.6,-0.09999999999999998,0.4,0.9,1.4,1.9,2.4],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"ym01":[3.8,2.05,0.8,0.04999999999999999,-0.2,0.04999999999999999,0.8,2.05,3.8],"yp01":[4.2,2.45,1.2,0.45,0.2,0.45,1.2,2.45,4.2]}},"id":"1a4b5c49-f63f-4f4c-bfd2-aab03a6735eb","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1a4b5c49-f63f-4f4c-bfd2-aab03a6735eb","type":"ColumnDataSource"},"glyph":{"id":"4ceded17-7642-4025-98df-00d7a59ac9bb","type":"Bezier"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"85d62618-1b61-4705-9af8-578d20b3364f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3f3988b4-46b6-4087-a7b5-18a5cf453869","type":"BasicTickFormatter"},"plot":{"id":"87001afd-fb32-414d-998d-a03ef434d30b","type":"Plot"},"ticker":{"id":"d8985028-6bca-4ca7-8691-459539396d13","type":"BasicTicker"}},"id":"eac38012-8225-42b2-be12-e7697bdd47fe","type":"LinearAxis"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"4ceded17-7642-4025-98df-00d7a59ac9bb","type":"Bezier"},{"attributes":{"callback":null},"id":"f8a273a8-5d2a-4385-b163-bda76dfe7c69","type":"DataRange1d"},{"attributes":{"callback":null},"id":"700af4fc-78e9-4c1b-8bed-308ead018796","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a789f282-16ff-4d51-9ff5-fb1e4cde55e8","type":"Toolbar"},{"attributes":{"plot":{"id":"87001afd-fb32-414d-998d-a03ef434d30b","type":"Plot"},"ticker":{"id":"d8985028-6bca-4ca7-8691-459539396d13","type":"BasicTicker"}},"id":"adc677f6-51ff-4a4d-9d6e-a18c8d256a28","type":"Grid"},{"attributes":{},"id":"6571da6d-1e4f-4fd9-9da0-aa629b7c2703","type":"BasicTicker"},{"attributes":{},"id":"f27d0cb4-7fde-431c-8829-81e2a32599f2","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"f27d0cb4-7fde-431c-8829-81e2a32599f2","type":"BasicTickFormatter"},"plot":{"id":"87001afd-fb32-414d-998d-a03ef434d30b","type":"Plot"},"ticker":{"id":"6571da6d-1e4f-4fd9-9da0-aa629b7c2703","type":"BasicTicker"}},"id":"2dd7d1c7-9ebc-4cfb-8385-3dcffa6ed1ae","type":"LinearAxis"},{"attributes":{},"id":"3f3988b4-46b6-4087-a7b5-18a5cf453869","type":"BasicTickFormatter"},{"attributes":{},"id":"95ed39a6-3340-4235-8aba-562b2ef140ae","type":"ToolEvents"}],"root_ids":["87001afd-fb32-414d-998d-a03ef434d30b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"1864a28f-e8c8-4039-b864-f4edf538967b","elementid":"35856979-ddeb-4c85-a49c-51709ca5ffa9","modelid":"87001afd-fb32-414d-998d-a03ef434d30b"}];
                  
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