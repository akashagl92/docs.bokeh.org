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
      };var element = document.getElementById("8d4cb7a5-d84c-4141-8e7d-8d8bc922dce5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d4cb7a5-d84c-4141-8e7d-8d8bc922dce5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"471717a0-8c93-468b-83f3-184604bd36a1":{"roots":{"references":[{"attributes":{},"id":"f2fb4cec-7fdb-4ccd-a543-027c31ae61df","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","ym01","yp01","xm01","x","xp01","xp02"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xm01":[-2.1,-1.6,-1.1,-0.6,-0.1,0.4,0.9,1.4,1.9],"xp01":[-1.9,-1.4,-0.9,-0.4,0.1,0.6,1.1,1.6,2.1],"xp02":[-1.6,-1.1,-0.6,-0.09999999999999998,0.4,0.9,1.4,1.9,2.4],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"ym01":[3.8,2.05,0.8,0.04999999999999999,-0.2,0.04999999999999999,0.8,2.05,3.8],"yp01":[4.2,2.45,1.2,0.45,0.2,0.45,1.2,2.45,4.2]}},"id":"41f2d3c1-b5af-4f34-a962-fbbd51acd580","type":"ColumnDataSource"},{"attributes":{},"id":"f5b277a4-00d9-49d7-975a-2513d7cf71fa","type":"ToolEvents"},{"attributes":{},"id":"1b3b5236-27c5-439d-b271-480479bf23ca","type":"BasicTicker"},{"attributes":{"below":[{"id":"9ff7e86e-96a1-482b-b66b-460e1ab13fa9","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"57a864a8-cc22-4488-8588-f607071c5d6a","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ca88fb6f-820f-40ff-b858-aec56aceb7b6","type":"GlyphRenderer"},{"id":"9ff7e86e-96a1-482b-b66b-460e1ab13fa9","type":"LinearAxis"},{"id":"57a864a8-cc22-4488-8588-f607071c5d6a","type":"LinearAxis"},{"id":"d3c2aa77-5b84-49d3-84f8-5396fd0472f0","type":"Grid"},{"id":"b7a00ab9-0f21-43ac-b489-518fcde1e159","type":"Grid"}],"title":null,"tool_events":{"id":"f5b277a4-00d9-49d7-975a-2513d7cf71fa","type":"ToolEvents"},"toolbar":{"id":"4d610104-5e8d-4eab-8df1-26e96df7798b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9c85516b-1bd6-44e8-a606-4f40f4ebc4cf","type":"DataRange1d"},"y_range":{"id":"c40b39a2-1191-48dc-a6bb-637786af2a7d","type":"DataRange1d"}},"id":"8e830931-06f2-40ce-bf5f-0dff450c003c","type":"Plot"},{"attributes":{},"id":"c687807e-7524-4eea-ab82-84a9bd1733da","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c40b39a2-1191-48dc-a6bb-637786af2a7d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7b498ece-4594-4ac4-b9d6-16b67045d28f","type":"BasicTickFormatter"},"plot":{"id":"8e830931-06f2-40ce-bf5f-0dff450c003c","type":"Plot"},"ticker":{"id":"f2fb4cec-7fdb-4ccd-a543-027c31ae61df","type":"BasicTicker"}},"id":"57a864a8-cc22-4488-8588-f607071c5d6a","type":"LinearAxis"},{"attributes":{},"id":"7b498ece-4594-4ac4-b9d6-16b67045d28f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8e830931-06f2-40ce-bf5f-0dff450c003c","type":"Plot"},"ticker":{"id":"1b3b5236-27c5-439d-b271-480479bf23ca","type":"BasicTicker"}},"id":"d3c2aa77-5b84-49d3-84f8-5396fd0472f0","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"8e830931-06f2-40ce-bf5f-0dff450c003c","type":"Plot"},"ticker":{"id":"f2fb4cec-7fdb-4ccd-a543-027c31ae61df","type":"BasicTicker"}},"id":"b7a00ab9-0f21-43ac-b489-518fcde1e159","type":"Grid"},{"attributes":{"data_source":{"id":"41f2d3c1-b5af-4f34-a962-fbbd51acd580","type":"ColumnDataSource"},"glyph":{"id":"77006386-2fa1-421d-9790-2bf71c52e5b0","type":"Bezier"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ca88fb6f-820f-40ff-b858-aec56aceb7b6","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"c687807e-7524-4eea-ab82-84a9bd1733da","type":"BasicTickFormatter"},"plot":{"id":"8e830931-06f2-40ce-bf5f-0dff450c003c","type":"Plot"},"ticker":{"id":"1b3b5236-27c5-439d-b271-480479bf23ca","type":"BasicTicker"}},"id":"9ff7e86e-96a1-482b-b66b-460e1ab13fa9","type":"LinearAxis"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"77006386-2fa1-421d-9790-2bf71c52e5b0","type":"Bezier"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4d610104-5e8d-4eab-8df1-26e96df7798b","type":"Toolbar"},{"attributes":{"callback":null},"id":"9c85516b-1bd6-44e8-a606-4f40f4ebc4cf","type":"DataRange1d"}],"root_ids":["8e830931-06f2-40ce-bf5f-0dff450c003c"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"471717a0-8c93-468b-83f3-184604bd36a1","elementid":"8d4cb7a5-d84c-4141-8e7d-8d8bc922dce5","modelid":"8e830931-06f2-40ce-bf5f-0dff450c003c"}];
              
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