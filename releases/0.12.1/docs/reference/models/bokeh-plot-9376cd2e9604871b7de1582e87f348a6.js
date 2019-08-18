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
      };var element = document.getElementById("cdeef09e-a820-428f-ad94-6c48a68a6775");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cdeef09e-a820-428f-ad94-6c48a68a6775' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"a2eb56c7-845d-434b-8df9-49be657ab7e7":{"roots":{"references":[{"attributes":{},"id":"9af328f9-33ff-41b7-9efb-95afc8f14050","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"4da0a925-c76e-4b85-84a7-f966a0298230","type":"Plot"},"ticker":{"id":"c7493561-0791-4a9c-8be4-d063f77a35c7","type":"BasicTicker"}},"id":"4a66e0c0-611e-4d22-8100-329176c6f827","type":"Grid"},{"attributes":{"callback":null},"id":"a93dfeea-4673-4826-a172-d0aac4fd4847","type":"DataRange1d"},{"attributes":{},"id":"618d3c18-a848-468e-81e9-e3b0d4cbc7fd","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"618d3c18-a848-468e-81e9-e3b0d4cbc7fd","type":"BasicTickFormatter"},"plot":{"id":"4da0a925-c76e-4b85-84a7-f966a0298230","type":"Plot"},"ticker":{"id":"9af328f9-33ff-41b7-9efb-95afc8f14050","type":"BasicTicker"}},"id":"a252078b-a7ae-4ed2-bce3-385226da8a0c","type":"LinearAxis"},{"attributes":{},"id":"fe7f2f6c-77e7-4a53-94c1-c46b1aee4d40","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"a0d9d13a-7fb4-4544-9306-b2f972b33431","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"5c706a63-a439-4175-b9c3-bba9baf3fa79","type":"BasicTickFormatter"},"plot":{"id":"4da0a925-c76e-4b85-84a7-f966a0298230","type":"Plot"},"ticker":{"id":"c7493561-0791-4a9c-8be4-d063f77a35c7","type":"BasicTicker"}},"id":"0a9312cf-766e-4d39-818f-ff801dd40849","type":"LinearAxis"},{"attributes":{},"id":"5c706a63-a439-4175-b9c3-bba9baf3fa79","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"4da0a925-c76e-4b85-84a7-f966a0298230","type":"Plot"},"ticker":{"id":"9af328f9-33ff-41b7-9efb-95afc8f14050","type":"BasicTicker"}},"id":"96f85de8-5118-420c-813c-c8cd654c890e","type":"Grid"},{"attributes":{"callback":null},"id":"57ee4110-8783-4543-9b80-c5ec8dd57048","type":"DataRange1d"},{"attributes":{},"id":"c7493561-0791-4a9c-8be4-d063f77a35c7","type":"BasicTicker"},{"attributes":{"data_source":{"id":"a0d9d13a-7fb4-4544-9306-b2f972b33431","type":"ColumnDataSource"},"glyph":{"id":"db9a50a4-a555-41d2-807f-2fd73f9ed79f","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dcdafa81-af09-4a37-924a-3c9572380104","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"db9a50a4-a555-41d2-807f-2fd73f9ed79f","type":"Wedge"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"03dda1d4-ceab-48c2-94ef-e50dcf7d8ed1","type":"Toolbar"},{"attributes":{"below":[{"id":"a252078b-a7ae-4ed2-bce3-385226da8a0c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0a9312cf-766e-4d39-818f-ff801dd40849","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"dcdafa81-af09-4a37-924a-3c9572380104","type":"GlyphRenderer"},{"id":"a252078b-a7ae-4ed2-bce3-385226da8a0c","type":"LinearAxis"},{"id":"0a9312cf-766e-4d39-818f-ff801dd40849","type":"LinearAxis"},{"id":"96f85de8-5118-420c-813c-c8cd654c890e","type":"Grid"},{"id":"4a66e0c0-611e-4d22-8100-329176c6f827","type":"Grid"}],"title":null,"tool_events":{"id":"fe7f2f6c-77e7-4a53-94c1-c46b1aee4d40","type":"ToolEvents"},"toolbar":{"id":"03dda1d4-ceab-48c2-94ef-e50dcf7d8ed1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"57ee4110-8783-4543-9b80-c5ec8dd57048","type":"DataRange1d"},"y_range":{"id":"a93dfeea-4673-4826-a172-d0aac4fd4847","type":"DataRange1d"}},"id":"4da0a925-c76e-4b85-84a7-f966a0298230","type":"Plot"}],"root_ids":["4da0a925-c76e-4b85-84a7-f966a0298230"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"a2eb56c7-845d-434b-8df9-49be657ab7e7","elementid":"cdeef09e-a820-428f-ad94-6c48a68a6775","modelid":"4da0a925-c76e-4b85-84a7-f966a0298230"}];
              
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