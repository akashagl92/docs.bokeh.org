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
      };var element = document.getElementById("d5cbc830-098f-4a73-894b-d181ddd1255a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd5cbc830-098f-4a73-894b-d181ddd1255a' but no matching script tag was found. ")
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
                  var docs_json = {"ae71c812-8a15-49e0-92d3-e4f68e7e5af8":{"roots":{"references":[{"attributes":{},"id":"018d7173-ef74-4157-82c2-daa702bd5992","type":"BasicTickFormatter"},{"attributes":{},"id":"6bfbb9b3-927b-43e6-af56-9dfd3b11babf","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["top","right","bottom","left"],"data":{"bottom":[4.1,2.525,1.4,0.725,0.5,0.725,1.4,2.525,4.1],"left":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"right":[-0.8999999999999999,-0.8625,-0.6000000000000001,-0.1875,0.3,0.7875,1.2,1.4625000000000001,1.5],"top":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"90aed7a4-7ae9-4d0e-97e9-a4876be7bbb8","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"f7d5a295-59fa-4993-adc0-5f23affd2144","type":"DataRange1d"},{"attributes":{},"id":"c936b71a-bd2e-427e-b5c7-2628b869dce7","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c3eec37b-03b3-4f51-a6d4-93858d1eb9b6","type":"DataRange1d"},{"attributes":{},"id":"43931d64-eb92-474e-9a9d-807579d7191c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"018d7173-ef74-4157-82c2-daa702bd5992","type":"BasicTickFormatter"},"plot":{"id":"becd57df-19a9-4c84-811c-e8e4fa28acb4","type":"Plot"},"ticker":{"id":"6bfbb9b3-927b-43e6-af56-9dfd3b11babf","type":"BasicTicker"}},"id":"dcde48fd-b5eb-431d-8afc-92886a3db1e4","type":"LinearAxis"},{"attributes":{"below":[{"id":"dcde48fd-b5eb-431d-8afc-92886a3db1e4","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"798fec7d-d8bc-4ea9-8dd6-ac2a33c597fb","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2215dff4-402b-4055-b598-a52aeccac95c","type":"GlyphRenderer"},{"id":"dcde48fd-b5eb-431d-8afc-92886a3db1e4","type":"LinearAxis"},{"id":"798fec7d-d8bc-4ea9-8dd6-ac2a33c597fb","type":"LinearAxis"},{"id":"cc76fb27-139c-4aa8-b602-7a503d7838f1","type":"Grid"},{"id":"143542dd-bb3e-4962-b64e-2c50d5363e56","type":"Grid"}],"title":null,"tool_events":{"id":"2b268fdf-2983-4017-82a2-ba26c9b5da5a","type":"ToolEvents"},"toolbar":{"id":"32a4e56e-4573-4c2c-a04e-96b7db8ab7aa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f7d5a295-59fa-4993-adc0-5f23affd2144","type":"DataRange1d"},"y_range":{"id":"c3eec37b-03b3-4f51-a6d4-93858d1eb9b6","type":"DataRange1d"}},"id":"becd57df-19a9-4c84-811c-e8e4fa28acb4","type":"Plot"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"29237e9e-d85e-4989-84de-c64bcf5615b3","type":"Quad"},{"attributes":{},"id":"2b268fdf-2983-4017-82a2-ba26c9b5da5a","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"32a4e56e-4573-4c2c-a04e-96b7db8ab7aa","type":"Toolbar"},{"attributes":{"plot":{"id":"becd57df-19a9-4c84-811c-e8e4fa28acb4","type":"Plot"},"ticker":{"id":"6bfbb9b3-927b-43e6-af56-9dfd3b11babf","type":"BasicTicker"}},"id":"cc76fb27-139c-4aa8-b602-7a503d7838f1","type":"Grid"},{"attributes":{"formatter":{"id":"c936b71a-bd2e-427e-b5c7-2628b869dce7","type":"BasicTickFormatter"},"plot":{"id":"becd57df-19a9-4c84-811c-e8e4fa28acb4","type":"Plot"},"ticker":{"id":"43931d64-eb92-474e-9a9d-807579d7191c","type":"BasicTicker"}},"id":"798fec7d-d8bc-4ea9-8dd6-ac2a33c597fb","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"becd57df-19a9-4c84-811c-e8e4fa28acb4","type":"Plot"},"ticker":{"id":"43931d64-eb92-474e-9a9d-807579d7191c","type":"BasicTicker"}},"id":"143542dd-bb3e-4962-b64e-2c50d5363e56","type":"Grid"},{"attributes":{"data_source":{"id":"90aed7a4-7ae9-4d0e-97e9-a4876be7bbb8","type":"ColumnDataSource"},"glyph":{"id":"29237e9e-d85e-4989-84de-c64bcf5615b3","type":"Quad"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2215dff4-402b-4055-b598-a52aeccac95c","type":"GlyphRenderer"}],"root_ids":["becd57df-19a9-4c84-811c-e8e4fa28acb4"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"ae71c812-8a15-49e0-92d3-e4f68e7e5af8","elementid":"d5cbc830-098f-4a73-894b-d181ddd1255a","modelid":"becd57df-19a9-4c84-811c-e8e4fa28acb4"}];
                  
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