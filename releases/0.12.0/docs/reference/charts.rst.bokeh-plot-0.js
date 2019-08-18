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
      };var element = document.getElementById("3612293b-17f9-44fe-b587-5b89fb12d84a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3612293b-17f9-44fe-b587-5b89fb12d84a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"0a40152a-d227-474e-8905-cdc14649a845":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,12.0,33.0,47.0,15.0,126.0,121.0,144.0,233.0,254.0,225.0,226.0,267.0,110.0,130.0,0.0]]}},"id":"8a26f2ff-f511-4df4-817a-97991e4083b6","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"}},"id":"12d3d7fe-27dc-432b-93d7-d53585a95cee","type":"HelpTool"},{"attributes":{"legends":[["jython",[{"id":"d197a72c-5759-474a-88f8-1b62ecf17775","type":"GlyphRenderer"}]],["pypy",[{"id":"f4b6ee8a-7ac2-4606-b122-92388228d03e","type":"GlyphRenderer"}]],["python",[{"id":"6c89b9f1-f53a-439b-be75-d5bfcaa96d29","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"}},"id":"1d3c16c2-5ec2-41d7-998d-dd1f5d589843","type":"Legend"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,22.0,43.0,10.0,25.0,26.0,101.0,114.0,203.0,194.0,215.0,201.0,227.0,139.0,160.0,0.0]]}},"id":"65779f16-686f-4b5b-9fe8-165116a606a2","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e2f2242d-fc38-40a0-8bd8-fcc0b1ecb7d3","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"7571301b-0e9d-4986-8283-a6e1bdb7bf7f","type":"Range1d"},{"attributes":{},"id":"a4ce71d2-cd01-479e-9e5f-3bc02184477e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8a26f2ff-f511-4df4-817a-97991e4083b6","type":"ColumnDataSource"},"glyph":{"id":"71069d14-2cb5-4a41-8950-e2b313bc196f","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f4b6ee8a-7ac2-4606-b122-92388228d03e","type":"GlyphRenderer"},{"attributes":{},"id":"a0cb0b9f-3b5a-444e-b05a-30b830e0aea3","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"5e63c150-1cf3-4742-b7b9-f86fb340897b","type":"Patches"},{"attributes":{"callback":null,"end":293.7,"start":-26.700000000000003},"id":"d5ac2f74-ef59-49ac-b97e-10fc789e4577","type":"Range1d"},{"attributes":{"axis_label":"memory","formatter":{"id":"3ac0998f-daf7-4931-98c6-2524165bfca4","type":"BasicTickFormatter"},"plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"},"ticker":{"id":"428c5b48-5418-4bb6-8f96-3c3e59278f36","type":"BasicTicker"}},"id":"8d0afa3b-ceb0-46c3-a25e-f8adf20bd4af","type":"LinearAxis"},{"attributes":{"axis_label":"time","formatter":{"id":"a4ce71d2-cd01-479e-9e5f-3bc02184477e","type":"BasicTickFormatter"},"plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"},"ticker":{"id":"f9b13826-1ff1-43e9-bc58-6b14c407f6b9","type":"BasicTicker"}},"id":"a94863b3-caeb-45b5-825c-686b5cff41d7","type":"LinearAxis"},{"attributes":{"plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"}},"id":"311f8752-110e-4681-845f-5bceb2386ec0","type":"ResetTool"},{"attributes":{},"id":"f9b13826-1ff1-43e9-bc58-6b14c407f6b9","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"71069d14-2cb5-4a41-8950-e2b313bc196f","type":"Patches"},{"attributes":{"overlay":{"id":"e2f2242d-fc38-40a0-8bd8-fcc0b1ecb7d3","type":"BoxAnnotation"},"plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"}},"id":"d83e7b2f-5448-47ad-a5c7-b8914a724cd9","type":"BoxZoomTool"},{"attributes":{},"id":"3ac0998f-daf7-4931-98c6-2524165bfca4","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,2.0,3.0,7.0,5.0,26.0,221.0,44.0,233.0,254.0,265.0,266.0,267.0,120.0,111.0,0.0]]}},"id":"efaec567-269a-41d2-a6cf-4e9cf79bc49f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"}},"id":"0fbf1905-8a04-4730-af74-d6dcae4cebfb","type":"SaveTool"},{"attributes":{"data_source":{"id":"efaec567-269a-41d2-a6cf-4e9cf79bc49f","type":"ColumnDataSource"},"glyph":{"id":"dc0d87c3-4ebe-405f-9f08-38941e404b83","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6c89b9f1-f53a-439b-be75-d5bfcaa96d29","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"59d3b03a-9733-4f86-bafa-4bc70d6b29b0","type":"PanTool"},{"id":"269af7d3-c8dc-4519-932b-383d2cc1741d","type":"WheelZoomTool"},{"id":"d83e7b2f-5448-47ad-a5c7-b8914a724cd9","type":"BoxZoomTool"},{"id":"0fbf1905-8a04-4730-af74-d6dcae4cebfb","type":"SaveTool"},{"id":"311f8752-110e-4681-845f-5bceb2386ec0","type":"ResetTool"},{"id":"12d3d7fe-27dc-432b-93d7-d53585a95cee","type":"HelpTool"}]},"id":"8ffadcf7-1c36-436d-83bc-2283cbd84516","type":"Toolbar"},{"attributes":{"plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"}},"id":"59d3b03a-9733-4f86-bafa-4bc70d6b29b0","type":"PanTool"},{"attributes":{"plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"},"ticker":{"id":"f9b13826-1ff1-43e9-bc58-6b14c407f6b9","type":"BasicTicker"}},"id":"6d4a942f-f38d-48bf-ad90-80cc253f276e","type":"Grid"},{"attributes":{"data_source":{"id":"65779f16-686f-4b5b-9fe8-165116a606a2","type":"ColumnDataSource"},"glyph":{"id":"5e63c150-1cf3-4742-b7b9-f86fb340897b","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d197a72c-5759-474a-88f8-1b62ecf17775","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Area Chart"},"id":"c6741cac-212b-41e1-8bbb-523b40842bd8","type":"Title"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"dc0d87c3-4ebe-405f-9f08-38941e404b83","type":"Patches"},{"attributes":{"below":[{"id":"a94863b3-caeb-45b5-825c-686b5cff41d7","type":"LinearAxis"}],"height":400,"left":[{"id":"8d0afa3b-ceb0-46c3-a25e-f8adf20bd4af","type":"LinearAxis"}],"renderers":[{"id":"e2f2242d-fc38-40a0-8bd8-fcc0b1ecb7d3","type":"BoxAnnotation"},{"id":"d197a72c-5759-474a-88f8-1b62ecf17775","type":"GlyphRenderer"},{"id":"f4b6ee8a-7ac2-4606-b122-92388228d03e","type":"GlyphRenderer"},{"id":"6c89b9f1-f53a-439b-be75-d5bfcaa96d29","type":"GlyphRenderer"},{"id":"1d3c16c2-5ec2-41d7-998d-dd1f5d589843","type":"Legend"},{"id":"a94863b3-caeb-45b5-825c-686b5cff41d7","type":"LinearAxis"},{"id":"8d0afa3b-ceb0-46c3-a25e-f8adf20bd4af","type":"LinearAxis"},{"id":"6d4a942f-f38d-48bf-ad90-80cc253f276e","type":"Grid"},{"id":"a0cf1c1d-7af8-4797-bbc2-56f776d93812","type":"Grid"}],"title":{"id":"c6741cac-212b-41e1-8bbb-523b40842bd8","type":"Title"},"tool_events":{"id":"a0cb0b9f-3b5a-444e-b05a-30b830e0aea3","type":"ToolEvents"},"toolbar":{"id":"8ffadcf7-1c36-436d-83bc-2283cbd84516","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"7571301b-0e9d-4986-8283-a6e1bdb7bf7f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"d5ac2f74-ef59-49ac-b97e-10fc789e4577","type":"Range1d"}},"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"428c5b48-5418-4bb6-8f96-3c3e59278f36","type":"BasicTicker"},{"attributes":{"plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"}},"id":"269af7d3-c8dc-4519-932b-383d2cc1741d","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d","subtype":"Chart","type":"Plot"},"ticker":{"id":"428c5b48-5418-4bb6-8f96-3c3e59278f36","type":"BasicTicker"}},"id":"a0cf1c1d-7af8-4797-bbc2-56f776d93812","type":"Grid"}],"root_ids":["d3ffa1d4-7f45-406d-94c1-0e9666d3db7d"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"0a40152a-d227-474e-8905-cdc14649a845","elementid":"3612293b-17f9-44fe-b587-5b89fb12d84a","modelid":"d3ffa1d4-7f45-406d-94c1-0e9666d3db7d"}];
              
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