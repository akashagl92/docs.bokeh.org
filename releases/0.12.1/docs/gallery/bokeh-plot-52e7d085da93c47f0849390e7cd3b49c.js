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
      };var element = document.getElementById("5c961fb3-ad20-4283-9ef0-750190fa2878");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5c961fb3-ad20-4283-9ef0-750190fa2878' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d7e98b13-04f5-4df4-a5b9-63e9abd7cc79":{"roots":{"references":[{"attributes":{"plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"61e6d6ae-7946-4917-855f-e00798b585a1","type":"BasicTicker"}},"id":"8f6c5b38-b4a3-4787-ba78-241c5cb5e246","type":"Grid"},{"attributes":{"plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"}},"id":"c1898184-5afa-4e16-b28d-aaf97129ac23","type":"ResetTool"},{"attributes":{},"id":"8746c223-cb91-4294-b75d-e9cf7b009769","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Duration","formatter":{"id":"763fb472-a29f-435d-ab67-a42686345fa9","type":"BasicTickFormatter"},"plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"c989d664-6b4c-4fb6-b9ca-fcff023c34a9","type":"BasicTicker"}},"id":"3d1d66b9-7acd-4333-be33-336999e54db4","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"}],"series":["jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[22,43,10,25,26,101,114,203,194,215,201,227,139,160]}},"id":"bf293000-4380-4757-b680-7ad7157c888c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"}],"series":["pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[12,33,47,15,126,121,144,233,254,225,226,267,110,130]}},"id":"0ae6bfd0-566d-4741-97f5-c8bdcce55776","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"bed24915-a97a-47fc-92f1-1f6ee324fc40","type":"Line"},{"attributes":{"data_source":{"id":"bf293000-4380-4757-b680-7ad7157c888c","type":"ColumnDataSource"},"glyph":{"id":"bed24915-a97a-47fc-92f1-1f6ee324fc40","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d4834f8d-dfe1-4e06-b600-4bb250c18d56","type":"GlyphRenderer"},{"attributes":{},"id":"9e93291d-3de0-4bd3-b84f-d8b3e91a14a8","type":"ToolEvents"},{"attributes":{"callback":null,"end":293.5,"start":-24.5},"id":"1b06154a-395e-4cef-ba0c-9bba24a204ee","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"}],"series":["python","python","python","python","python","python","python","python","python","python","python","python","python","python"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[2,3,7,5,26,221,44,233,254,265,266,267,120,111]}},"id":"7fa1aa53-00cf-468a-9bdf-96fd642e3e7b","type":"ColumnDataSource"},{"attributes":{},"id":"763fb472-a29f-435d-ab67-a42686345fa9","type":"BasicTickFormatter"},{"attributes":{"axis_label":"index","formatter":{"id":"8746c223-cb91-4294-b75d-e9cf7b009769","type":"BasicTickFormatter"},"plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"61e6d6ae-7946-4917-855f-e00798b585a1","type":"BasicTicker"}},"id":"5e2402f6-014c-46af-bbf7-00d5c4f527f3","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Interpreter Sample Data"},"id":"1328cfd6-3834-4e15-bad3-067b1d3e6e56","type":"Title"},{"attributes":{"data_source":{"id":"0ae6bfd0-566d-4741-97f5-c8bdcce55776","type":"ColumnDataSource"},"glyph":{"id":"4cb2fc60-cb48-4cb4-931e-4329967ecc66","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2dc39919-bcec-4433-8f4b-b6e8af52d6d6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"}},"id":"97658a8c-a450-4b8a-8061-6180a87bf6df","type":"PanTool"},{"attributes":{"plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"}},"id":"9566bbcb-6627-4166-bd39-d11db8bda27c","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"}},"id":"d60f6e1a-767f-4ef9-aa77-300ad60a82ef","type":"HelpTool"},{"attributes":{},"id":"61e6d6ae-7946-4917-855f-e00798b585a1","type":"BasicTicker"},{"attributes":{},"id":"c989d664-6b4c-4fb6-b9ca-fcff023c34a9","type":"BasicTicker"},{"attributes":{"legends":[["jython",[{"id":"d4834f8d-dfe1-4e06-b600-4bb250c18d56","type":"GlyphRenderer"}]],["pypy",[{"id":"2dc39919-bcec-4433-8f4b-b6e8af52d6d6","type":"GlyphRenderer"}]],["python",[{"id":"64027a94-dd7b-4d94-8a9a-e22e0a0c4579","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"}},"id":"45e6c89a-97e9-40fc-add1-888fc5d6de41","type":"Legend"},{"attributes":{"line_color":{"value":"#407ee7"},"line_dash":[2,4],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d37c9f69-5d98-4d2b-b020-f02564b9fcb0","type":"Line"},{"attributes":{"data_source":{"id":"7fa1aa53-00cf-468a-9bdf-96fd642e3e7b","type":"ColumnDataSource"},"glyph":{"id":"d37c9f69-5d98-4d2b-b020-f02564b9fcb0","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"64027a94-dd7b-4d94-8a9a-e22e0a0c4579","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"97658a8c-a450-4b8a-8061-6180a87bf6df","type":"PanTool"},{"id":"9566bbcb-6627-4166-bd39-d11db8bda27c","type":"WheelZoomTool"},{"id":"cd67520c-e277-41e7-b729-dac0fc4021ea","type":"BoxZoomTool"},{"id":"ae466fac-8f18-4d38-a66e-5acf1fa49935","type":"SaveTool"},{"id":"c1898184-5afa-4e16-b28d-aaf97129ac23","type":"ResetTool"},{"id":"d60f6e1a-767f-4ef9-aa77-300ad60a82ef","type":"HelpTool"}]},"id":"dbee9bf7-a30a-4724-964b-b7ac38ad1fa9","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"c989d664-6b4c-4fb6-b9ca-fcff023c34a9","type":"BasicTicker"}},"id":"22d0a02b-6d41-4c3b-bc54-af2e515699d2","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a0eea4d2-cf42-4c87-9316-f95fb740136b","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"a0eea4d2-cf42-4c87-9316-f95fb740136b","type":"BoxAnnotation"},"plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"}},"id":"cd67520c-e277-41e7-b729-dac0fc4021ea","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"f9d5fe9b-b1f8-4989-be44-1ed3550b297b","type":"Range1d"},{"attributes":{"plot":{"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"}},"id":"ae466fac-8f18-4d38-a66e-5acf1fa49935","type":"SaveTool"},{"attributes":{"below":[{"id":"5e2402f6-014c-46af-bbf7-00d5c4f527f3","type":"LinearAxis"}],"height":400,"left":[{"id":"3d1d66b9-7acd-4333-be33-336999e54db4","type":"LinearAxis"}],"renderers":[{"id":"a0eea4d2-cf42-4c87-9316-f95fb740136b","type":"BoxAnnotation"},{"id":"64027a94-dd7b-4d94-8a9a-e22e0a0c4579","type":"GlyphRenderer"},{"id":"2dc39919-bcec-4433-8f4b-b6e8af52d6d6","type":"GlyphRenderer"},{"id":"d4834f8d-dfe1-4e06-b600-4bb250c18d56","type":"GlyphRenderer"},{"id":"45e6c89a-97e9-40fc-add1-888fc5d6de41","type":"Legend"},{"id":"5e2402f6-014c-46af-bbf7-00d5c4f527f3","type":"LinearAxis"},{"id":"3d1d66b9-7acd-4333-be33-336999e54db4","type":"LinearAxis"},{"id":"8f6c5b38-b4a3-4787-ba78-241c5cb5e246","type":"Grid"},{"id":"22d0a02b-6d41-4c3b-bc54-af2e515699d2","type":"Grid"}],"title":{"id":"1328cfd6-3834-4e15-bad3-067b1d3e6e56","type":"Title"},"tool_events":{"id":"9e93291d-3de0-4bd3-b84f-d8b3e91a14a8","type":"ToolEvents"},"toolbar":{"id":"dbee9bf7-a30a-4724-964b-b7ac38ad1fa9","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"f9d5fe9b-b1f8-4989-be44-1ed3550b297b","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1b06154a-395e-4cef-ba0c-9bba24a204ee","type":"Range1d"}},"id":"326be245-4931-40c7-b268-3b60c63181c3","subtype":"Chart","type":"Plot"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"4cb2fc60-cb48-4cb4-931e-4329967ecc66","type":"Line"}],"root_ids":["326be245-4931-40c7-b268-3b60c63181c3"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"d7e98b13-04f5-4df4-a5b9-63e9abd7cc79","elementid":"5c961fb3-ad20-4283-9ef0-750190fa2878","modelid":"326be245-4931-40c7-b268-3b60c63181c3"}];
              
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