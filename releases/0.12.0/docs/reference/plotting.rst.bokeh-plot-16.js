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
      };var element = document.getElementById("d95105de-ff07-46c7-8c39-20b11cc11dd2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd95105de-ff07-46c7-8c39-20b11cc11dd2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f184f3d9-180d-4d0a-8c2f-dadacf87aa7a":{"roots":{"references":[{"attributes":{"plot":{"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"}},"id":"d6c23020-eb69-4292-a530-fe2ba24cab39","type":"ResetTool"},{"attributes":{"plot":{"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"}},"id":"b1c492a9-4377-4042-b2a3-540737629c77","type":"SaveTool"},{"attributes":{},"id":"66b0aa39-858d-418d-9508-be22e5323be7","type":"ToolEvents"},{"attributes":{"formatter":{"id":"699da924-f8ce-4b68-90ac-6ec2acd90dfa","type":"BasicTickFormatter"},"plot":{"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"},"ticker":{"id":"2dc4c366-5277-48a4-84a4-050db9ca79b4","type":"BasicTicker"}},"id":"e6da7a3c-4c6e-4762-99b2-20946fb2b588","type":"LinearAxis"},{"attributes":{"below":[{"id":"f806362b-00b5-4230-9840-32809a969bb1","type":"LinearAxis"}],"left":[{"id":"e6da7a3c-4c6e-4762-99b2-20946fb2b588","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f806362b-00b5-4230-9840-32809a969bb1","type":"LinearAxis"},{"id":"6c402c62-ace3-4557-86bf-88a6611bcb50","type":"Grid"},{"id":"e6da7a3c-4c6e-4762-99b2-20946fb2b588","type":"LinearAxis"},{"id":"215d32bb-7dac-477a-b5c3-e9567727d097","type":"Grid"},{"id":"0971aa3b-c31c-46a9-add9-efd94404214e","type":"BoxAnnotation"},{"id":"43b15dea-2b88-451a-823d-58da7932373f","type":"GlyphRenderer"}],"title":{"id":"82142b5a-d1a0-4ca0-96d3-36667e982496","type":"Title"},"tool_events":{"id":"66b0aa39-858d-418d-9508-be22e5323be7","type":"ToolEvents"},"toolbar":{"id":"30ad23e1-8a2a-4e91-bf68-3be2a7c85cbf","type":"Toolbar"},"x_range":{"id":"fc6e5134-5567-4742-bc03-f68a890ebb52","type":"DataRange1d"},"y_range":{"id":"b3ee41f7-eace-4944-a8b1-5d1b8882f0bc","type":"DataRange1d"}},"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3c01247-fa61-4025-8fbb-8b9a49e6fd15","type":"Ray"},{"attributes":{"dimension":1,"plot":{"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"},"ticker":{"id":"2dc4c366-5277-48a4-84a4-050db9ca79b4","type":"BasicTicker"}},"id":"215d32bb-7dac-477a-b5c3-e9567727d097","type":"Grid"},{"attributes":{},"id":"699da924-f8ce-4b68-90ac-6ec2acd90dfa","type":"BasicTickFormatter"},{"attributes":{},"id":"5c036fec-3035-46e4-bbdc-fd3c774c411d","type":"BasicTicker"},{"attributes":{"plot":{"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c036fec-3035-46e4-bbdc-fd3c774c411d","type":"BasicTicker"}},"id":"6c402c62-ace3-4557-86bf-88a6611bcb50","type":"Grid"},{"attributes":{},"id":"2dc4c366-5277-48a4-84a4-050db9ca79b4","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0971aa3b-c31c-46a9-add9-efd94404214e","type":"BoxAnnotation"},{"attributes":{},"id":"d79ddecb-f280-44bb-a2a8-14378a2274af","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"0971aa3b-c31c-46a9-add9-efd94404214e","type":"BoxAnnotation"},"plot":{"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"}},"id":"95019f68-e2e0-47f5-9873-a603033e3aa1","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"863f11f1-ed75-446c-8856-e24ffc0166e3","type":"PanTool"},{"id":"d84a6583-8fbe-4839-b630-80edb9f8c831","type":"WheelZoomTool"},{"id":"95019f68-e2e0-47f5-9873-a603033e3aa1","type":"BoxZoomTool"},{"id":"b1c492a9-4377-4042-b2a3-540737629c77","type":"SaveTool"},{"id":"d6c23020-eb69-4292-a530-fe2ba24cab39","type":"ResetTool"},{"id":"d899bbd8-db9b-410c-bd2c-d8787cc054eb","type":"HelpTool"}]},"id":"30ad23e1-8a2a-4e91-bf68-3be2a7c85cbf","type":"Toolbar"},{"attributes":{"plot":null,"text":null},"id":"82142b5a-d1a0-4ca0-96d3-36667e982496","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"57c9ba01-9b08-477f-aa85-078bac81dfa5","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"fc6e5134-5567-4742-bc03-f68a890ebb52","type":"DataRange1d"},{"attributes":{"callback":null},"id":"b3ee41f7-eace-4944-a8b1-5d1b8882f0bc","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0dda283-374d-4ded-a386-662371d7c0e7","type":"Ray"},{"attributes":{"plot":{"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"}},"id":"d899bbd8-db9b-410c-bd2c-d8787cc054eb","type":"HelpTool"},{"attributes":{"plot":{"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"}},"id":"d84a6583-8fbe-4839-b630-80edb9f8c831","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"d79ddecb-f280-44bb-a2a8-14378a2274af","type":"BasicTickFormatter"},"plot":{"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c036fec-3035-46e4-bbdc-fd3c774c411d","type":"BasicTicker"}},"id":"f806362b-00b5-4230-9840-32809a969bb1","type":"LinearAxis"},{"attributes":{"data_source":{"id":"57c9ba01-9b08-477f-aa85-078bac81dfa5","type":"ColumnDataSource"},"glyph":{"id":"d3c01247-fa61-4025-8fbb-8b9a49e6fd15","type":"Ray"},"hover_glyph":null,"nonselection_glyph":{"id":"a0dda283-374d-4ded-a386-662371d7c0e7","type":"Ray"},"selection_glyph":null},"id":"43b15dea-2b88-451a-823d-58da7932373f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cae34e0f-277a-4860-9fb7-ca2e1de22acb","subtype":"Figure","type":"Plot"}},"id":"863f11f1-ed75-446c-8856-e24ffc0166e3","type":"PanTool"}],"root_ids":["cae34e0f-277a-4860-9fb7-ca2e1de22acb"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"f184f3d9-180d-4d0a-8c2f-dadacf87aa7a","elementid":"d95105de-ff07-46c7-8c39-20b11cc11dd2","modelid":"cae34e0f-277a-4860-9fb7-ca2e1de22acb"}];
              
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