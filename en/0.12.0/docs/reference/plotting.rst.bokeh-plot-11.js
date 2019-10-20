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
      };var element = document.getElementById("6b5d136c-7605-494c-a7ae-71ac4cd7582d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6b5d136c-7605-494c-a7ae-71ac4cd7582d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"5fd50c75-f2b2-46a9-a44d-02083109b971":{"roots":{"references":[{"attributes":{"callback":null},"id":"4747cb92-a7a9-4b67-8482-4a4cb40b9d60","type":"DataRange1d"},{"attributes":{"data_source":{"id":"bc2661c5-f14e-431f-8457-25e4d81f5890","type":"ColumnDataSource"},"glyph":{"id":"81373f86-f14a-4a7f-b836-a08db02ffe6e","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"490e3805-334a-4920-9410-ca92d112922f","type":"MultiLine"},"selection_glyph":null},"id":"41963c7c-27cc-4649-9a73-fe08d218e677","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"54932d97-0177-4cb7-b4ae-7292834fcaa9","type":"BoxAnnotation"},"plot":{"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"}},"id":"a60d0952-e1e2-41ec-93a8-e945b618252d","type":"BoxZoomTool"},{"attributes":{},"id":"3b08c295-c4b7-4d40-89de-f05ce6c30cb2","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"490e3805-334a-4920-9410-ca92d112922f","type":"MultiLine"},{"attributes":{"callback":null},"id":"4e99a2d4-5a3c-44d1-859b-ca23754a3835","type":"DataRange1d"},{"attributes":{},"id":"bfe04452-86d9-4e2b-9cc7-253784cb1cb9","type":"ToolEvents"},{"attributes":{},"id":"9414fbed-8b92-48e6-9eeb-6780cb1e1e5e","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"8a047d9a-4343-44da-ad1f-6d9653a5e90a","type":"Title"},{"attributes":{},"id":"fb4feac1-ae60-4d26-a4e5-abb3f83e5ed6","type":"BasicTicker"},{"attributes":{"plot":{"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"}},"id":"e0fa0c5b-e371-4d85-823f-8394ddc3dba9","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"924502ed-5c05-4bdf-ace2-291c34841bd3","type":"PanTool"},{"id":"cbf5c3c9-30e2-414a-96a3-6c9771c2697f","type":"WheelZoomTool"},{"id":"a60d0952-e1e2-41ec-93a8-e945b618252d","type":"BoxZoomTool"},{"id":"14a1de1a-6dd1-4e72-abd4-8ed4ddff7909","type":"SaveTool"},{"id":"e0fa0c5b-e371-4d85-823f-8394ddc3dba9","type":"ResetTool"},{"id":"1cf3f083-3b50-47be-83d0-3807c2fbc951","type":"HelpTool"}]},"id":"32587da5-556b-41e3-8242-24d124e62d91","type":"Toolbar"},{"attributes":{"formatter":{"id":"9414fbed-8b92-48e6-9eeb-6780cb1e1e5e","type":"BasicTickFormatter"},"plot":{"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b08c295-c4b7-4d40-89de-f05ce6c30cb2","type":"BasicTicker"}},"id":"0afc9c0a-a53e-426c-a9ad-a5550be6a5ed","type":"LinearAxis"},{"attributes":{"plot":{"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b08c295-c4b7-4d40-89de-f05ce6c30cb2","type":"BasicTicker"}},"id":"3316338d-73b6-4a94-84ca-a193504b080e","type":"Grid"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"81373f86-f14a-4a7f-b836-a08db02ffe6e","type":"MultiLine"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"54932d97-0177-4cb7-b4ae-7292834fcaa9","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"}},"id":"cbf5c3c9-30e2-414a-96a3-6c9771c2697f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"}},"id":"924502ed-5c05-4bdf-ace2-291c34841bd3","type":"PanTool"},{"attributes":{},"id":"d7b0ce59-fe85-4649-a35a-322429a9c5d0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"}},"id":"14a1de1a-6dd1-4e72-abd4-8ed4ddff7909","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb4feac1-ae60-4d26-a4e5-abb3f83e5ed6","type":"BasicTicker"}},"id":"2a423b61-d803-4a18-9999-55e154ec6c7b","type":"Grid"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"bc2661c5-f14e-431f-8457-25e4d81f5890","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"}},"id":"1cf3f083-3b50-47be-83d0-3807c2fbc951","type":"HelpTool"},{"attributes":{"below":[{"id":"0afc9c0a-a53e-426c-a9ad-a5550be6a5ed","type":"LinearAxis"}],"left":[{"id":"75c6767b-f09d-49c4-9805-713cd1f7f1d6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0afc9c0a-a53e-426c-a9ad-a5550be6a5ed","type":"LinearAxis"},{"id":"3316338d-73b6-4a94-84ca-a193504b080e","type":"Grid"},{"id":"75c6767b-f09d-49c4-9805-713cd1f7f1d6","type":"LinearAxis"},{"id":"2a423b61-d803-4a18-9999-55e154ec6c7b","type":"Grid"},{"id":"54932d97-0177-4cb7-b4ae-7292834fcaa9","type":"BoxAnnotation"},{"id":"41963c7c-27cc-4649-9a73-fe08d218e677","type":"GlyphRenderer"}],"title":{"id":"8a047d9a-4343-44da-ad1f-6d9653a5e90a","type":"Title"},"tool_events":{"id":"bfe04452-86d9-4e2b-9cc7-253784cb1cb9","type":"ToolEvents"},"toolbar":{"id":"32587da5-556b-41e3-8242-24d124e62d91","type":"Toolbar"},"x_range":{"id":"4e99a2d4-5a3c-44d1-859b-ca23754a3835","type":"DataRange1d"},"y_range":{"id":"4747cb92-a7a9-4b67-8482-4a4cb40b9d60","type":"DataRange1d"}},"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"d7b0ce59-fe85-4649-a35a-322429a9c5d0","type":"BasicTickFormatter"},"plot":{"id":"9bf6217e-f215-4ef1-a025-06ac47c51d57","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb4feac1-ae60-4d26-a4e5-abb3f83e5ed6","type":"BasicTicker"}},"id":"75c6767b-f09d-49c4-9805-713cd1f7f1d6","type":"LinearAxis"}],"root_ids":["9bf6217e-f215-4ef1-a025-06ac47c51d57"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"5fd50c75-f2b2-46a9-a44d-02083109b971","elementid":"6b5d136c-7605-494c-a7ae-71ac4cd7582d","modelid":"9bf6217e-f215-4ef1-a025-06ac47c51d57"}];
              
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