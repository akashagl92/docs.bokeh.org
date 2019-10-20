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
      };var element = document.getElementById("05932d7b-12ef-4b09-943c-178692fec06d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '05932d7b-12ef-4b09-943c-178692fec06d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"edcdee89-ddc2-4138-b1c7-3ae29232eb09":{"roots":{"references":[{"attributes":{"plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"}},"id":"a80c2173-cb26-4032-958d-931f582e4905","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"920bb1f9-73f1-4fc8-a6c4-0e3246d52294","type":"Square"},{"attributes":{},"id":"ea0d84b7-0240-4516-95c7-41031c31293b","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"59700bf1-cca2-4c44-9641-9b4b2fc9baa6","type":"Circle"},{"attributes":{"below":[{"id":"774536ff-62c7-4a87-b426-3b15232ed221","type":"LinearAxis"}],"height":400,"left":[{"id":"0234440d-9e84-47ca-b302-34a25ab59997","type":"LinearAxis"}],"renderers":[{"id":"94abc49d-f65f-4e49-9d17-17b23595a390","type":"BoxAnnotation"},{"id":"ef0e904d-8a22-40fe-bf9c-a439ef7c3cce","type":"GlyphRenderer"},{"id":"c0a090e3-2355-4c1f-bb08-ee492887fcad","type":"GlyphRenderer"},{"id":"8ea63acb-0f80-4ebd-9017-8441b83c7f1e","type":"GlyphRenderer"},{"id":"5b8030d2-923f-4566-bfa5-4ecf646e603f","type":"Legend"},{"id":"774536ff-62c7-4a87-b426-3b15232ed221","type":"LinearAxis"},{"id":"0234440d-9e84-47ca-b302-34a25ab59997","type":"LinearAxis"},{"id":"0a3dfd82-496f-4685-9cef-b4a2f79d5f26","type":"Grid"},{"id":"7ba03264-322c-47e1-a9e0-de36ff186229","type":"Grid"}],"title":{"id":"1c48ba93-43ba-4993-8a81-d439153bd75b","type":"Title"},"tool_events":{"id":"3ede9b55-c72b-4465-b08d-5a974bd485d7","type":"ToolEvents"},"toolbar":{"id":"845296af-357b-44fa-9bae-1f24e98cbc53","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"4c7ac23b-0662-45eb-b7e8-738b4d50f3e5","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"e3c5e719-8f96-44c3-bb19-62be6507d1d8","type":"Range1d"}},"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"}],"species":["virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"],"x_values":[6.0,5.1,5.9,5.6,5.8,6.6,4.5,6.3,5.8,6.1,5.1,5.3,5.5,5.0,5.1,5.3,5.5,6.7,6.9,5.0,5.7,4.9,6.7,4.9,5.7,6.0,4.8,4.9,5.6,5.8,6.1,6.4,5.6,5.1,5.6,6.1,5.6,5.5,4.8,5.4,5.6,5.1,5.1,5.9,5.7,5.2,5.0,5.2,5.4,5.1],"y_values":[2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2.0,1.9,2.1,2.0,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2.0,2.0,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2.0,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2.0,2.3,1.8]}},"id":"c89d6f6b-5266-42ed-af3e-fe7fd38a9e43","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"}},"id":"ae1367c5-256a-4d3a-9574-d14e0f6956f5","type":"HelpTool"},{"attributes":{"plot":null,"text":"Iris Dataset Color and Marker by Species"},"id":"1c48ba93-43ba-4993-8a81-d439153bd75b","type":"Title"},{"attributes":{"plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"}},"id":"6d47cb92-1265-4091-8365-9edac220c5dd","type":"PanTool"},{"attributes":{"plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"},"ticker":{"id":"81ee2e3a-4524-41bc-8915-457c02a3e998","type":"BasicTicker"}},"id":"0a3dfd82-496f-4685-9cef-b4a2f79d5f26","type":"Grid"},{"attributes":{"plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"}},"id":"b33f0dda-b8b5-4c01-a635-47f7389fcc30","type":"WheelZoomTool"},{"attributes":{},"id":"290469f7-4dc9-45cc-a8e2-101221fb3590","type":"BasicTickFormatter"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"290469f7-4dc9-45cc-a8e2-101221fb3590","type":"BasicTickFormatter"},"plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"},"ticker":{"id":"9d1a5636-0cfb-471a-b5e3-6b755d5395d3","type":"BasicTicker"}},"id":"0234440d-9e84-47ca-b302-34a25ab59997","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"},"ticker":{"id":"9d1a5636-0cfb-471a-b5e3-6b755d5395d3","type":"BasicTicker"}},"id":"7ba03264-322c-47e1-a9e0-de36ff186229","type":"Grid"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"}],"species":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa"],"x_values":[1.4,1.4,1.3,1.5,1.4,1.7,1.4,1.5,1.4,1.5,1.5,1.6,1.4,1.1,1.2,1.5,1.3,1.4,1.7,1.5,1.7,1.5,1.0,1.7,1.9,1.6,1.6,1.5,1.4,1.6,1.6,1.5,1.5,1.4,1.5,1.2,1.3,1.4,1.3,1.5,1.3,1.3,1.3,1.6,1.9,1.4,1.6,1.4,1.5,1.4],"y_values":[0.2,0.2,0.2,0.2,0.2,0.4,0.3,0.2,0.2,0.1,0.2,0.2,0.1,0.1,0.2,0.4,0.4,0.3,0.3,0.3,0.2,0.4,0.2,0.5,0.2,0.2,0.4,0.2,0.2,0.2,0.2,0.4,0.1,0.2,0.2,0.2,0.2,0.1,0.2,0.2,0.3,0.3,0.2,0.6,0.4,0.3,0.2,0.2,0.2,0.2]}},"id":"5c12f108-fc01-4d6e-a2d9-230e6607c339","type":"ColumnDataSource"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"ea0d84b7-0240-4516-95c7-41031c31293b","type":"BasicTickFormatter"},"plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"},"ticker":{"id":"81ee2e3a-4524-41bc-8915-457c02a3e998","type":"BasicTicker"}},"id":"774536ff-62c7-4a87-b426-3b15232ed221","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f6abaf83-aff5-4a86-9533-8380a143d898","type":"ColumnDataSource"},"glyph":{"id":"920bb1f9-73f1-4fc8-a6c4-0e3246d52294","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c0a090e3-2355-4c1f-bb08-ee492887fcad","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":7.49,"start":0.4099999999999999},"id":"4c7ac23b-0662-45eb-b7e8-738b4d50f3e5","type":"Range1d"},{"attributes":{"plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"}},"id":"1f3230b7-a31d-44ca-8705-9ffc7bcc3152","type":"ResetTool"},{"attributes":{},"id":"3ede9b55-c72b-4465-b08d-5a974bd485d7","type":"ToolEvents"},{"attributes":{},"id":"81ee2e3a-4524-41bc-8915-457c02a3e998","type":"BasicTicker"},{"attributes":{"legends":[["setosa",[{"id":"ef0e904d-8a22-40fe-bf9c-a439ef7c3cce","type":"GlyphRenderer"}]],["versicolor",[{"id":"c0a090e3-2355-4c1f-bb08-ee492887fcad","type":"GlyphRenderer"}]],["virginica",[{"id":"8ea63acb-0f80-4ebd-9017-8441b83c7f1e","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"}},"id":"5b8030d2-923f-4566-bfa5-4ecf646e603f","type":"Legend"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"}],"species":["versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor"],"x_values":[4.7,4.5,4.9,4.0,4.6,4.5,4.7,3.3,4.6,3.9,3.5,4.2,4.0,4.7,3.6,4.4,4.5,4.1,4.5,3.9,4.8,4.0,4.9,4.7,4.3,4.4,4.8,5.0,4.5,3.5,3.8,3.7,3.9,5.1,4.5,4.5,4.7,4.4,4.1,4.0,4.4,4.6,4.0,3.3,4.2,4.2,4.2,4.3,3.0,4.1],"y_values":[1.4,1.5,1.5,1.3,1.5,1.3,1.6,1.0,1.3,1.4,1.0,1.5,1.0,1.4,1.3,1.4,1.5,1.0,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1.0,1.1,1.0,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1.0,1.3,1.2,1.3,1.3,1.1,1.3]}},"id":"f6abaf83-aff5-4a86-9533-8380a143d898","type":"ColumnDataSource"},{"attributes":{},"id":"9d1a5636-0cfb-471a-b5e3-6b755d5395d3","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6d47cb92-1265-4091-8365-9edac220c5dd","type":"PanTool"},{"id":"b33f0dda-b8b5-4c01-a635-47f7389fcc30","type":"WheelZoomTool"},{"id":"3a65bf82-2fa7-4cbf-845c-180a9ff365f8","type":"BoxZoomTool"},{"id":"a80c2173-cb26-4032-958d-931f582e4905","type":"SaveTool"},{"id":"1f3230b7-a31d-44ca-8705-9ffc7bcc3152","type":"ResetTool"},{"id":"ae1367c5-256a-4d3a-9574-d14e0f6956f5","type":"HelpTool"}]},"id":"845296af-357b-44fa-9bae-1f24e98cbc53","type":"Toolbar"},{"attributes":{"data_source":{"id":"5c12f108-fc01-4d6e-a2d9-230e6607c339","type":"ColumnDataSource"},"glyph":{"id":"59700bf1-cca2-4c44-9641-9b4b2fc9baa6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ef0e904d-8a22-40fe-bf9c-a439ef7c3cce","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"94abc49d-f65f-4e49-9d17-17b23595a390","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"08a11155-4d60-43bf-8c23-4e01bcdc1e1b","type":"Triangle"},{"attributes":{"callback":null,"end":2.74,"start":-0.13999999999999999},"id":"e3c5e719-8f96-44c3-bb19-62be6507d1d8","type":"Range1d"},{"attributes":{"data_source":{"id":"c89d6f6b-5266-42ed-af3e-fe7fd38a9e43","type":"ColumnDataSource"},"glyph":{"id":"08a11155-4d60-43bf-8c23-4e01bcdc1e1b","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8ea63acb-0f80-4ebd-9017-8441b83c7f1e","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"94abc49d-f65f-4e49-9d17-17b23595a390","type":"BoxAnnotation"},"plot":{"id":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19","subtype":"Chart","type":"Plot"}},"id":"3a65bf82-2fa7-4cbf-845c-180a9ff365f8","type":"BoxZoomTool"}],"root_ids":["0d0140c3-9f87-4c86-87f6-7cf29c2e9f19"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"edcdee89-ddc2-4138-b1c7-3ae29232eb09","elementid":"05932d7b-12ef-4b09-943c-178692fec06d","modelid":"0d0140c3-9f87-4c86-87f6-7cf29c2e9f19"}];
              
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