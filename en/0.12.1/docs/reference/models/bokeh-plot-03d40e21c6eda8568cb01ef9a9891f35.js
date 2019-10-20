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
      };var element = document.getElementById("ed69bc8b-9341-468e-ae32-8d949d97b30c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ed69bc8b-9341-468e-ae32-8d949d97b30c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"7154ecf9-da13-46fc-bcdd-d62173749618":{"roots":{"references":[{"attributes":{"callback":null},"id":"32766e84-f518-48f3-aaa6-3afccdc4fc3d","type":"DataRange1d"},{"attributes":{"plot":{"id":"b5376128-c166-4a12-9c0b-e5c4bdc09df9","type":"Plot"},"ticker":{"id":"539d7a6c-abba-4841-baec-373766d007c8","type":"BasicTicker"}},"id":"497e77f4-cb0f-4fcf-ab55-12560e1a509e","type":"Grid"},{"attributes":{"formatter":{"id":"62557449-e54a-439e-b5b7-56c3b81a655c","type":"BasicTickFormatter"},"plot":{"id":"b5376128-c166-4a12-9c0b-e5c4bdc09df9","type":"Plot"},"ticker":{"id":"539d7a6c-abba-4841-baec-373766d007c8","type":"BasicTicker"}},"id":"82735769-af93-446f-abcc-21fc16ddd7c5","type":"LinearAxis"},{"attributes":{"below":[{"id":"82735769-af93-446f-abcc-21fc16ddd7c5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b7348a07-76f0-4a4d-b98e-059501740a35","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"722b630e-63e9-4733-b1bd-87e7af051ea9","type":"GlyphRenderer"},{"id":"82735769-af93-446f-abcc-21fc16ddd7c5","type":"LinearAxis"},{"id":"b7348a07-76f0-4a4d-b98e-059501740a35","type":"LinearAxis"},{"id":"497e77f4-cb0f-4fcf-ab55-12560e1a509e","type":"Grid"},{"id":"86dec881-346a-4323-9916-806a9cbf2b63","type":"Grid"}],"title":null,"tool_events":{"id":"c3435f8d-78a0-4041-8e4a-5d2423a6d5e7","type":"ToolEvents"},"toolbar":{"id":"6f158d8c-f674-4e3a-bf22-746302a12465","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19dda55b-b37c-48fd-90af-be46bfba80a5","type":"DataRange1d"},"y_range":{"id":"32766e84-f518-48f3-aaa6-3afccdc4fc3d","type":"DataRange1d"}},"id":"b5376128-c166-4a12-9c0b-e5c4bdc09df9","type":"Plot"},{"attributes":{},"id":"c3435f8d-78a0-4041-8e4a-5d2423a6d5e7","type":"ToolEvents"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3ec621e-7328-4902-abd8-f214a08e140a","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"6f158d8c-f674-4e3a-bf22-746302a12465","type":"Toolbar"},{"attributes":{"formatter":{"id":"6f479205-4034-4cfe-80b4-96267add1153","type":"BasicTickFormatter"},"plot":{"id":"b5376128-c166-4a12-9c0b-e5c4bdc09df9","type":"Plot"},"ticker":{"id":"5bf26f51-eab1-421e-831b-26657d36f70c","type":"BasicTicker"}},"id":"b7348a07-76f0-4a4d-b98e-059501740a35","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"b5376128-c166-4a12-9c0b-e5c4bdc09df9","type":"Plot"},"ticker":{"id":"5bf26f51-eab1-421e-831b-26657d36f70c","type":"BasicTicker"}},"id":"86dec881-346a-4323-9916-806a9cbf2b63","type":"Grid"},{"attributes":{"data_source":{"id":"000990ec-234a-4cba-9fc4-79901e98bcac","type":"ColumnDataSource"},"glyph":{"id":"a3ec621e-7328-4902-abd8-f214a08e140a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"722b630e-63e9-4733-b1bd-87e7af051ea9","type":"GlyphRenderer"},{"attributes":{},"id":"62557449-e54a-439e-b5b7-56c3b81a655c","type":"BasicTickFormatter"},{"attributes":{},"id":"6f479205-4034-4cfe-80b4-96267add1153","type":"BasicTickFormatter"},{"attributes":{},"id":"5bf26f51-eab1-421e-831b-26657d36f70c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"19dda55b-b37c-48fd-90af-be46bfba80a5","type":"DataRange1d"},{"attributes":{},"id":"539d7a6c-abba-4841-baec-373766d007c8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","h","w","x"],"data":{"h":[0.5,0.4125,0.35,0.3125,0.3,0.3125,0.35,0.4125,0.5],"w":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"000990ec-234a-4cba-9fc4-79901e98bcac","type":"ColumnDataSource"}],"root_ids":["b5376128-c166-4a12-9c0b-e5c4bdc09df9"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"7154ecf9-da13-46fc-bcdd-d62173749618","elementid":"ed69bc8b-9341-468e-ae32-8d949d97b30c","modelid":"b5376128-c166-4a12-9c0b-e5c4bdc09df9"}];
              
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