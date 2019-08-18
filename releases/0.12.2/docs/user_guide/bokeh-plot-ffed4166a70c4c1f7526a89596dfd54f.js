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
      };var element = document.getElementById("0522b8ed-b595-48ce-84b9-75d89090cc9f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0522b8ed-b595-48ce-84b9-75d89090cc9f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"997e98a6-3522-473a-bc12-f0fd7cd5b25d":{"roots":{"references":[{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"140447f1-046c-413e-9e65-40cbbd867b82","type":"Rect"},{"attributes":{"plot":{"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"}},"id":"68ff2a24-cb5e-4b1c-8d6e-085e51847e0f","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"fff00347-ab4f-4b99-846f-3510eef8e4c7","type":"Circle"},{"attributes":{"plot":{"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"}},"id":"62120fc2-b049-46dd-8afc-0f2b725a1a68","type":"SaveTool"},{"attributes":{"overlay":{"id":"cdc4ed5c-6472-4f8e-aed1-bcb7c63fc779","type":"BoxAnnotation"},"plot":{"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"}},"id":"203cc07d-16e3-43d0-bd2e-6ea144d44aa3","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c8f7bc3a-02dd-4787-b5fe-352e7b960b1d","type":"PanTool"},{"id":"7b1ba469-1e1d-4f92-b26f-25b8616f6b17","type":"WheelZoomTool"},{"id":"203cc07d-16e3-43d0-bd2e-6ea144d44aa3","type":"BoxZoomTool"},{"id":"62120fc2-b049-46dd-8afc-0f2b725a1a68","type":"SaveTool"},{"id":"68ff2a24-cb5e-4b1c-8d6e-085e51847e0f","type":"ResetTool"},{"id":"46d53423-1364-4190-9065-99f7b985dfa4","type":"HelpTool"}]},"id":"dabfc9d5-9511-4e48-8a5f-8d7950e47c87","type":"Toolbar"},{"attributes":{"plot":{"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"}},"id":"c8f7bc3a-02dd-4787-b5fe-352e7b960b1d","type":"PanTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"7c3a3c3f-5bc6-4e9a-bef5-b91814652948","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"ee6dc130-8549-48f5-bbc8-2efeed691afc","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":[26.6,23.0,23.9]}},"id":"11636c47-9c35-4113-a874-99658fe22f29","type":"ColumnDataSource"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"4bceb642-9439-4608-b6b6-37851165dcee","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"},"ticker":{"id":"4e887641-3675-48fd-9ea8-a5ad86fb1987","type":"CategoricalTicker"}},"id":"711ccb27-d62a-4170-ae0c-779d50fde5c8","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"7718450a-d20c-4ab9-a965-b2a1200163b2","type":"ColumnDataSource"},"glyph":{"id":"72995948-83e1-48c3-b532-e9c14b564887","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ce41daa8-137a-4dbd-a9a2-737f74aa5054","type":"GlyphRenderer"},{"attributes":{"legends":[["3",[{"id":"5d74fef9-db05-4a94-8665-58df57e128d4","type":"GlyphRenderer"},{"id":"d9bffe78-e30c-4691-bf89-7a230aed502f","type":"GlyphRenderer"},{"id":"0c4f70be-be69-4ce8-bf32-7212816b0ab2","type":"GlyphRenderer"}]],["4",[{"id":"41a793da-5aab-4909-ba70-a1efa5551fa7","type":"GlyphRenderer"},{"id":"1b749441-0a9f-4e7c-99db-85f747877ccb","type":"GlyphRenderer"},{"id":"b201797e-3cc4-4ff2-bde4-f45369c474e0","type":"GlyphRenderer"},{"id":"c05977b4-f7f1-4d03-a7a7-fdae2213d563","type":"GlyphRenderer"}]],["5",[{"id":"f0bac656-217e-4251-b0ce-ab39ccfa4e64","type":"GlyphRenderer"},{"id":"196c15a4-e4d9-40e1-8e1e-973dfdd1c56b","type":"GlyphRenderer"},{"id":"d7ce4bc0-bc0c-4e0d-b16b-36633ef8f058","type":"GlyphRenderer"}]],["6",[{"id":"e14350c0-8eb4-4209-b8a8-52e323d05a9b","type":"GlyphRenderer"},{"id":"52f1dfd3-46fc-4793-9f92-0fe67af87056","type":"GlyphRenderer"},{"id":"9d018166-c85b-407a-9055-8d55be253c40","type":"GlyphRenderer"},{"id":"1f2d8f35-f67d-4baa-a729-c2615afada8a","type":"GlyphRenderer"}]],["8",[{"id":"ce41daa8-137a-4dbd-a9a2-737f74aa5054","type":"GlyphRenderer"},{"id":"9cf1f84c-8a5b-4f99-aab7-953feebf9baf","type":"GlyphRenderer"},{"id":"1d9c2793-0f6c-4807-8f4b-1228a87a4030","type":"GlyphRenderer"},{"id":"dda4046c-d3d6-4493-ab52-0cc5521834ac","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"}},"id":"65ae11f0-59df-41f9-8888-68955d5adbc4","type":"Legend"},{"attributes":{"plot":null,"text":"MPG Summary (grouped by CYL, shaded whiskers)"},"id":"def64324-1692-4223-aec2-f83bfd148c3c","type":"Title"},{"attributes":{"data_source":{"id":"60444ebd-d79a-4d5a-a32c-af7f36153579","type":"ColumnDataSource"},"glyph":{"id":"7dcc258e-2a94-4f71-beeb-c6a34aa79842","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c05977b4-f7f1-4d03-a7a7-fdae2213d563","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"914a67b4-0ff3-4b8b-9032-c773a52765aa","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca638993-0b97-4329-8c02-8fbe8d7fa02e","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"e5bcdc49-033a-4c81-9639-efb5120f389a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"af811913-015b-409e-87bd-d1acc2c2c450","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1b5002ad-b88d-4a53-91d6-e0b0c30febd8","type":"ColumnDataSource"},"glyph":{"id":"0258ee8d-9b86-49e4-bd8d-542101bdb28e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"196c15a4-e4d9-40e1-8e1e-973dfdd1c56b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"1b5002ad-b88d-4a53-91d6-e0b0c30febd8","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"06e4d626-9285-4110-af66-7f69ccc1d2da","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"},"ticker":{"id":"e8b2764c-1967-4584-b99d-da976293ef13","type":"BasicTicker"}},"id":"8b6d0845-a502-4f9c-8248-22efa3e2cffd","type":"Grid"},{"attributes":{"data_source":{"id":"7c3a3c3f-5bc6-4e9a-bef5-b91814652948","type":"ColumnDataSource"},"glyph":{"id":"9967ed74-1610-4d6e-b32c-b6a5a7b4bff9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"41a793da-5aab-4909-ba70-a1efa5551fa7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"30e0c79e-fe86-4c25-b288-b374a39e337e","type":"ColumnDataSource"},"glyph":{"id":"8d9a657c-b79a-44a6-bd1d-97671bf5fceb","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9d018166-c85b-407a-9055-8d55be253c40","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"46cafb77-fe1e-4d39-a469-c28fed5478a8","type":"ColumnDataSource"},"glyph":{"id":"e6a6ff50-1d6e-4cf9-9a17-5823b21215b3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5d74fef9-db05-4a94-8665-58df57e128d4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":[26.8,28.8,32.7,38.0,30.7]}},"id":"30e0c79e-fe86-4c25-b288-b374a39e337e","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"goldenrod"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"7dcc258e-2a94-4f71-beeb-c6a34aa79842","type":"Segment"},{"attributes":{"data_source":{"id":"4f9c80cd-6a44-4184-809f-f82cb2e7b1ab","type":"ColumnDataSource"},"glyph":{"id":"cbf73cfd-ac88-4723-8609-fe0d2ab201b1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"52f1dfd3-46fc-4793-9f92-0fe67af87056","type":"GlyphRenderer"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"ac138e01-a3fb-4606-b2ed-a9f43d23c3de","type":"BasicTickFormatter"},"plot":{"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"},"ticker":{"id":"e8b2764c-1967-4584-b99d-da976293ef13","type":"BasicTicker"}},"id":"9a296e95-ca10-429f-8c66-44f984db995a","type":"LinearAxis"},{"attributes":{"callback":null,"end":49.38},"id":"57a175c6-e6f2-4d69-aac8-00a793a85083","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"a7dd66e6-a65f-4ea4-85c5-9c11524f03e3","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9967ed74-1610-4d6e-b32c-b6a5a7b4bff9","type":"Rect"},{"attributes":{"data_source":{"id":"11636c47-9c35-4113-a874-99658fe22f29","type":"ColumnDataSource"},"glyph":{"id":"fff00347-ab4f-4b99-846f-3510eef8e4c7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1d9c2793-0f6c-4807-8f4b-1228a87a4030","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"25368669-efca-4cc6-85a2-e33f355ac351","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"46cafb77-fe1e-4d39-a469-c28fed5478a8","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"goldenrod"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"27646148-4220-44d0-a99a-b534762940cf","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"72995948-83e1-48c3-b532-e9c14b564887","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cbf73cfd-ac88-4723-8609-fe0d2ab201b1","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"1be68693-9f0f-42ab-93f5-08b624a8a549","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17c62f63-bb30-4adb-ad60-9038322dcdbd","type":"Rect"},{"attributes":{"data_source":{"id":"647901e4-cee0-484f-909f-344b1f746e60","type":"ColumnDataSource"},"glyph":{"id":"25368669-efca-4cc6-85a2-e33f355ac351","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f0bac656-217e-4251-b0ce-ab39ccfa4e64","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"af811913-015b-409e-87bd-d1acc2c2c450","type":"ColumnDataSource"},"glyph":{"id":"ca638993-0b97-4329-8c02-8fbe8d7fa02e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9cf1f84c-8a5b-4f99-aab7-953feebf9baf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":[46.6]}},"id":"0b6d6a12-79f9-494b-86c0-8ba29f53093f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e6a6ff50-1d6e-4cf9-9a17-5823b21215b3","type":"Rect"},{"attributes":{"line_color":{"value":"goldenrod"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"2e0e0960-c3b7-43c9-bd3c-a6bdb78606ab","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0258ee8d-9b86-49e4-bd8d-542101bdb28e","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"7718450a-d20c-4ab9-a965-b2a1200163b2","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"goldenrod"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"8c8f0410-3480-454d-a926-b60558686e38","type":"Segment"},{"attributes":{"data_source":{"id":"a7dd66e6-a65f-4ea4-85c5-9c11524f03e3","type":"ColumnDataSource"},"glyph":{"id":"27646148-4220-44d0-a99a-b534762940cf","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dda4046c-d3d6-4493-ab52-0cc5521834ac","type":"GlyphRenderer"},{"attributes":{},"id":"4e887641-3675-48fd-9ea8-a5ad86fb1987","type":"CategoricalTicker"},{"attributes":{},"id":"4bceb642-9439-4608-b6b6-37851165dcee","type":"CategoricalTickFormatter"},{"attributes":{"line_color":{"value":"goldenrod"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"9b04a0d3-2869-4a04-99a6-020b4bb562c2","type":"Segment"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"00ffa722-d23f-43d5-aa4e-e9cf484e8304","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0b6d6a12-79f9-494b-86c0-8ba29f53093f","type":"ColumnDataSource"},"glyph":{"id":"914a67b4-0ff3-4b8b-9032-c773a52765aa","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b201797e-3cc4-4ff2-bde4-f45369c474e0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"d4820cb9-29a7-48b1-baa6-a1b70d3bd18f","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"647901e4-cee0-484f-909f-344b1f746e60","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1be68693-9f0f-42ab-93f5-08b624a8a549","type":"ColumnDataSource"},"glyph":{"id":"2e0e0960-c3b7-43c9-bd3c-a6bdb78606ab","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d7ce4bc0-bc0c-4e0d-b16b-36633ef8f058","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"06e4d626-9285-4110-af66-7f69ccc1d2da","type":"ColumnDataSource"},"glyph":{"id":"17c62f63-bb30-4adb-ad60-9038322dcdbd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1b749441-0a9f-4e7c-99db-85f747877ccb","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"00ffa722-d23f-43d5-aa4e-e9cf484e8304","type":"ColumnDataSource"},"glyph":{"id":"6d1f8cbf-7e72-4a2b-8560-7057d3430d9b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9bffe78-e30c-4691-bf89-7a230aed502f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"60444ebd-d79a-4d5a-a32c-af7f36153579","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6d1f8cbf-7e72-4a2b-8560-7057d3430d9b","type":"Rect"},{"attributes":{},"id":"800de4ef-397c-48bc-8d67-e8ab70ef898e","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"4f9c80cd-6a44-4184-809f-f82cb2e7b1ab","type":"ColumnDataSource"},{"attributes":{},"id":"e8b2764c-1967-4584-b99d-da976293ef13","type":"BasicTicker"},{"attributes":{"plot":{"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"}},"id":"7b1ba469-1e1d-4f92-b26f-25b8616f6b17","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"e5bcdc49-033a-4c81-9639-efb5120f389a","type":"ColumnDataSource"},"glyph":{"id":"9b04a0d3-2869-4a04-99a6-020b4bb562c2","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0c4f70be-be69-4ce8-bf32-7212816b0ab2","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"86deff31-bd41-44c6-80cb-da71c152cece","type":"ColumnDataSource"},"glyph":{"id":"8c8f0410-3480-454d-a926-b60558686e38","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1f2d8f35-f67d-4baa-a729-c2615afada8a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"8d9a657c-b79a-44a6-bd1d-97671bf5fceb","type":"Circle"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"86deff31-bd41-44c6-80cb-da71c152cece","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d4820cb9-29a7-48b1-baa6-a1b70d3bd18f","type":"ColumnDataSource"},"glyph":{"id":"140447f1-046c-413e-9e65-40cbbd867b82","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e14350c0-8eb4-4209-b8a8-52e323d05a9b","type":"GlyphRenderer"},{"attributes":{},"id":"ac138e01-a3fb-4606-b2ed-a9f43d23c3de","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"711ccb27-d62a-4170-ae0c-779d50fde5c8","type":"CategoricalAxis"}],"height":400,"left":[{"id":"9a296e95-ca10-429f-8c66-44f984db995a","type":"LinearAxis"}],"renderers":[{"id":"cdc4ed5c-6472-4f8e-aed1-bcb7c63fc779","type":"BoxAnnotation"},{"id":"5d74fef9-db05-4a94-8665-58df57e128d4","type":"GlyphRenderer"},{"id":"d9bffe78-e30c-4691-bf89-7a230aed502f","type":"GlyphRenderer"},{"id":"0c4f70be-be69-4ce8-bf32-7212816b0ab2","type":"GlyphRenderer"},{"id":"41a793da-5aab-4909-ba70-a1efa5551fa7","type":"GlyphRenderer"},{"id":"1b749441-0a9f-4e7c-99db-85f747877ccb","type":"GlyphRenderer"},{"id":"b201797e-3cc4-4ff2-bde4-f45369c474e0","type":"GlyphRenderer"},{"id":"c05977b4-f7f1-4d03-a7a7-fdae2213d563","type":"GlyphRenderer"},{"id":"f0bac656-217e-4251-b0ce-ab39ccfa4e64","type":"GlyphRenderer"},{"id":"196c15a4-e4d9-40e1-8e1e-973dfdd1c56b","type":"GlyphRenderer"},{"id":"d7ce4bc0-bc0c-4e0d-b16b-36633ef8f058","type":"GlyphRenderer"},{"id":"e14350c0-8eb4-4209-b8a8-52e323d05a9b","type":"GlyphRenderer"},{"id":"52f1dfd3-46fc-4793-9f92-0fe67af87056","type":"GlyphRenderer"},{"id":"9d018166-c85b-407a-9055-8d55be253c40","type":"GlyphRenderer"},{"id":"1f2d8f35-f67d-4baa-a729-c2615afada8a","type":"GlyphRenderer"},{"id":"ce41daa8-137a-4dbd-a9a2-737f74aa5054","type":"GlyphRenderer"},{"id":"9cf1f84c-8a5b-4f99-aab7-953feebf9baf","type":"GlyphRenderer"},{"id":"1d9c2793-0f6c-4807-8f4b-1228a87a4030","type":"GlyphRenderer"},{"id":"dda4046c-d3d6-4493-ab52-0cc5521834ac","type":"GlyphRenderer"},{"id":"65ae11f0-59df-41f9-8888-68955d5adbc4","type":"Legend"},{"id":"711ccb27-d62a-4170-ae0c-779d50fde5c8","type":"CategoricalAxis"},{"id":"9a296e95-ca10-429f-8c66-44f984db995a","type":"LinearAxis"},{"id":"8b6d0845-a502-4f9c-8248-22efa3e2cffd","type":"Grid"}],"title":{"id":"def64324-1692-4223-aec2-f83bfd148c3c","type":"Title"},"tool_events":{"id":"800de4ef-397c-48bc-8d67-e8ab70ef898e","type":"ToolEvents"},"toolbar":{"id":"dabfc9d5-9511-4e48-8a5f-8d7950e47c87","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"ee6dc130-8549-48f5-bbc8-2efeed691afc","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"57a175c6-e6f2-4d69-aac8-00a793a85083","type":"Range1d"}},"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cdc4ed5c-6472-4f8e-aed1-bcb7c63fc779","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b","subtype":"Chart","type":"Plot"}},"id":"46d53423-1364-4190-9065-99f7b985dfa4","type":"HelpTool"}],"root_ids":["023c70dd-3528-4edf-9bcf-ee3ea51d6b9b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"997e98a6-3522-473a-bc12-f0fd7cd5b25d","elementid":"0522b8ed-b595-48ce-84b9-75d89090cc9f","modelid":"023c70dd-3528-4edf-9bcf-ee3ea51d6b9b"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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