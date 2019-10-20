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
      };var element = document.getElementById("c8930da1-2f77-410e-be32-a51d82211b64");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c8930da1-2f77-410e-be32-a51d82211b64' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"4f34601a-e419-432f-8f60-7b8467fbe57a":{"roots":{"references":[{"attributes":{"formatter":{"id":"54becbc2-1a33-4f61-9601-33e6e2abe648","type":"BasicTickFormatter"},"plot":{"id":"48eb6bc1-b59f-4dc4-8bee-5922520a98f7","type":"Plot"},"ticker":{"id":"f85553db-f3eb-4632-a5b9-e3f66c43c5cd","type":"BasicTicker"}},"id":"1fb99680-e03f-448d-834a-2edd7689f26f","type":"LinearAxis"},{"attributes":{"callback":null},"id":"d801c585-44ea-4d36-8bfb-9da977f4ef9b","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ff085576-afed-4c6f-a51f-81308cfdb465","type":"DataRange1d"},{"attributes":{"formatter":{"id":"ae6edc19-0f26-4b38-b728-ecc4881ad72c","type":"BasicTickFormatter"},"plot":{"id":"48eb6bc1-b59f-4dc4-8bee-5922520a98f7","type":"Plot"},"ticker":{"id":"d694e4de-4a4a-4380-bb11-bc229d86de7a","type":"BasicTicker"}},"id":"a8cec222-c56c-4bcb-b3bd-63361048d1c1","type":"LinearAxis"},{"attributes":{},"id":"ccb0224a-d591-458d-a765-0960bad8081f","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"48eb6bc1-b59f-4dc4-8bee-5922520a98f7","type":"Plot"},"ticker":{"id":"f85553db-f3eb-4632-a5b9-e3f66c43c5cd","type":"BasicTicker"}},"id":"dae222a1-0c03-4120-8570-ea40f3f63a1c","type":"Grid"},{"attributes":{},"id":"ae6edc19-0f26-4b38-b728-ecc4881ad72c","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a8cec222-c56c-4bcb-b3bd-63361048d1c1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1fb99680-e03f-448d-834a-2edd7689f26f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"456212e5-cc4e-4050-bcdf-98fe4ac19f08","type":"GlyphRenderer"},{"id":"a8cec222-c56c-4bcb-b3bd-63361048d1c1","type":"LinearAxis"},{"id":"1fb99680-e03f-448d-834a-2edd7689f26f","type":"LinearAxis"},{"id":"bf8efa56-60a1-4f45-86b8-0069062918fa","type":"Grid"},{"id":"dae222a1-0c03-4120-8570-ea40f3f63a1c","type":"Grid"}],"title":null,"tool_events":{"id":"ccb0224a-d591-458d-a765-0960bad8081f","type":"ToolEvents"},"toolbar":{"id":"bb033ad4-b5f2-4fae-8a13-8f9d4124ac32","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ff085576-afed-4c6f-a51f-81308cfdb465","type":"DataRange1d"},"y_range":{"id":"d801c585-44ea-4d36-8bfb-9da977f4ef9b","type":"DataRange1d"}},"id":"48eb6bc1-b59f-4dc4-8bee-5922520a98f7","type":"Plot"},{"attributes":{"data_source":{"id":"296fb0a3-5895-48ad-858c-4491ea781f4a","type":"ColumnDataSource"},"glyph":{"id":"722f2914-54ac-4d28-b566-d56697665661","type":"Bezier"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"456212e5-cc4e-4050-bcdf-98fe4ac19f08","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","ym01","yp01","xm01","x","xp01","xp02"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xm01":[-2.1,-1.6,-1.1,-0.6,-0.1,0.4,0.9,1.4,1.9],"xp01":[-1.9,-1.4,-0.9,-0.4,0.1,0.6,1.1,1.6,2.1],"xp02":[-1.6,-1.1,-0.6,-0.09999999999999998,0.4,0.9,1.4,1.9,2.4],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"ym01":[3.8,2.05,0.8,0.04999999999999999,-0.2,0.04999999999999999,0.8,2.05,3.8],"yp01":[4.2,2.45,1.2,0.45,0.2,0.45,1.2,2.45,4.2]}},"id":"296fb0a3-5895-48ad-858c-4491ea781f4a","type":"ColumnDataSource"},{"attributes":{},"id":"54becbc2-1a33-4f61-9601-33e6e2abe648","type":"BasicTickFormatter"},{"attributes":{},"id":"f85553db-f3eb-4632-a5b9-e3f66c43c5cd","type":"BasicTicker"},{"attributes":{"plot":{"id":"48eb6bc1-b59f-4dc4-8bee-5922520a98f7","type":"Plot"},"ticker":{"id":"d694e4de-4a4a-4380-bb11-bc229d86de7a","type":"BasicTicker"}},"id":"bf8efa56-60a1-4f45-86b8-0069062918fa","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bb033ad4-b5f2-4fae-8a13-8f9d4124ac32","type":"Toolbar"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"722f2914-54ac-4d28-b566-d56697665661","type":"Bezier"},{"attributes":{},"id":"d694e4de-4a4a-4380-bb11-bc229d86de7a","type":"BasicTicker"}],"root_ids":["48eb6bc1-b59f-4dc4-8bee-5922520a98f7"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"4f34601a-e419-432f-8f60-7b8467fbe57a","elementid":"c8930da1-2f77-410e-be32-a51d82211b64","modelid":"48eb6bc1-b59f-4dc4-8bee-5922520a98f7"}];
              
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