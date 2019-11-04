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
      };var element = document.getElementById("5da44089-230c-46ae-a3bb-deec386dfee1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5da44089-230c-46ae-a3bb-deec386dfee1' but no matching script tag was found. ")
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
                  var docs_json = {"214e07f9-9577-48eb-bb90-c0b7e9feb317":{"roots":{"references":[{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"91930218-d00f-4975-bf5a-f99b2d45d7f5","type":"Text"},{"attributes":{"data_source":{"id":"458d17f1-6244-4850-8137-89787c1b70c4","type":"ColumnDataSource"},"glyph":{"id":"6cd013ef-246b-4ffe-b94d-c2156bdfaf32","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"f96c09fc-7b58-400b-9e83-c324f39c91a9","type":"Triangle"},"selection_glyph":null},"id":"a69d5164-2c06-4d67-9239-f702159365ea","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d61bf1ef-e4b5-4663-aca2-3c74ea2d9765","type":"SquareCross"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"715bcf8d-a72f-405f-af6b-d9578b95a856","type":"Text"},{"attributes":{"data_source":{"id":"bcfc583b-9132-44eb-bd39-5b35fc18f316","type":"ColumnDataSource"},"glyph":{"id":"579f7bd3-9a8d-4858-b368-d916d4d4ec30","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"4fdf322a-f742-40c3-bc38-7cfd85e93e74","type":"Text"},"selection_glyph":null},"id":"58683b16-b94b-4dbe-98f0-0a23cfe85c6b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"4612e492-60e3-4f27-90d6-81630f117cb8","type":"X"},{"attributes":{"overlay":{"id":"e136fca0-0401-4a97-8e40-b5a04af1bd29","type":"BoxAnnotation"},"plot":{"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"}},"id":"bdbbcfd2-43bd-463d-b8eb-bd5c7d4b35d9","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"a534fb3a-3097-4b52-a1e6-fcc1ca1cdb8a","type":"ColumnDataSource"},"glyph":{"id":"123982e2-21ef-4fc4-861c-6673787f6b65","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"80697c6e-89ab-445a-9ebe-90b95b36875c","type":"Text"},"selection_glyph":null},"id":"aa6005dc-2683-48f2-b065-e38152a186fe","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"cc780105-6312-4c04-aef3-3703af2b1ffe","type":"Text"},{"attributes":{"callback":null},"id":"ebcbfaa9-429b-40ba-aff5-fa501b45323a","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"8153a417-337c-4062-a6af-4a9aa0533aff","type":"SquareX"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"9b7295b6-a56f-43cf-ac64-8e1b7a3df5a4","type":"LinearAxis"}],"left":[{"id":"5e429ac3-ceac-413b-94a5-06b6b05b5b82","type":"LinearAxis"}],"renderers":[{"id":"9b7295b6-a56f-43cf-ac64-8e1b7a3df5a4","type":"LinearAxis"},{"id":"6489bea9-db5b-4fa6-ad15-c0282c585c27","type":"Grid"},{"id":"5e429ac3-ceac-413b-94a5-06b6b05b5b82","type":"LinearAxis"},{"id":"07b7d410-6269-4369-a533-a1741c8d50ac","type":"Grid"},{"id":"e136fca0-0401-4a97-8e40-b5a04af1bd29","type":"BoxAnnotation"},{"id":"11670968-4cce-4a6d-8169-6be1fd88bc30","type":"GlyphRenderer"},{"id":"8d0e638d-6445-4a46-a3f7-701e9f580ab0","type":"GlyphRenderer"},{"id":"a69d5164-2c06-4d67-9239-f702159365ea","type":"GlyphRenderer"},{"id":"2f867b5f-ce39-4430-8544-91a58d801fa7","type":"GlyphRenderer"},{"id":"0e90685e-6c53-459f-aefb-a271a2ee9350","type":"GlyphRenderer"},{"id":"f6677b7a-aea5-4215-acfc-0237cbeb9067","type":"GlyphRenderer"},{"id":"49e517e1-4201-4409-b69c-4e1671d3e63d","type":"GlyphRenderer"},{"id":"3a60fdc9-9bbb-44fe-ba2d-5f7304f30c2b","type":"GlyphRenderer"},{"id":"3d54407d-a146-4007-9625-ff87a3628398","type":"GlyphRenderer"},{"id":"f1c61118-45d7-4150-98e2-f4fee17ffa8f","type":"GlyphRenderer"},{"id":"2c926d22-be15-438b-964b-2d6df9af80cb","type":"GlyphRenderer"},{"id":"c6d2d5c9-0836-4798-aa25-15b711810ce4","type":"GlyphRenderer"},{"id":"58683b16-b94b-4dbe-98f0-0a23cfe85c6b","type":"GlyphRenderer"},{"id":"aa6005dc-2683-48f2-b065-e38152a186fe","type":"GlyphRenderer"},{"id":"5f82a836-4643-4151-a8a4-d51abb95733d","type":"GlyphRenderer"},{"id":"3464c269-b4c0-4846-a71d-7500ce3f746b","type":"GlyphRenderer"},{"id":"32894bdb-22a1-4308-a4d6-e22fd5b4a5aa","type":"GlyphRenderer"},{"id":"fcd10bf7-6584-499a-b453-28aa6d4372cb","type":"GlyphRenderer"},{"id":"5c2ba4dc-561b-4e6a-a8af-8384477fb2c7","type":"GlyphRenderer"},{"id":"7fcf3310-9b2d-4b2c-9826-422ab7ef31fd","type":"GlyphRenderer"},{"id":"328b075a-2320-4ec3-a8cc-f42456faec7b","type":"GlyphRenderer"},{"id":"366bdcc9-4e7c-416f-a8ca-a63c1aad19a6","type":"GlyphRenderer"},{"id":"f8cf3836-a6eb-4ba3-b43d-3f0497a5d3f4","type":"GlyphRenderer"},{"id":"1808da5e-8434-40e3-a2cf-f72fb3dbdade","type":"GlyphRenderer"}],"title":{"id":"cb783269-b1a6-43aa-b06b-6657515f0756","type":"Title"},"tool_events":{"id":"d1ad2e3c-a91d-486f-84cc-1734c9fd9b1e","type":"ToolEvents"},"toolbar":{"id":"e3af6f68-19d4-4077-8a73-6c3c7973257d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ebcbfaa9-429b-40ba-aff5-fa501b45323a","type":"DataRange1d"},"y_range":{"id":"c54f57b2-96f9-490e-b3e6-e4419a37a68e","type":"DataRange1d"}},"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"16193a88-a124-4ac9-980d-4d9853cd3d31","type":"Square"},{"attributes":{"plot":{"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"}},"id":"f7b0788a-fe55-422a-90b9-485841994321","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"b152fead-e110-4c9c-b3ff-c22ee45bc24d","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[8.213368563794528,8.655439806295993,8.79705062444383,8.524210684114394,8.250615017346268,8.108582713947891,8.558701201826032,8.740421963163172,8.601646478576633,8.821898822910725],"y":[1.7153187986157272,1.446645312473576,1.3422127437090365,1.4770937519340022,1.8679414955322762,1.0647388207086197,1.1579643619760276,1.8810179697457483,1.3580635718491458,1.516081786271986]}},"id":"060551c8-1995-480c-91c8-67fe66cb3340","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["asterisk / *"]}},"id":"b2f38058-d4f4-42ec-a9db-ed5590c9ee5a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle / o"]}},"id":"bcfc583b-9132-44eb-bd39-5b35fc18f316","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square"]}},"id":"a534fb3a-3097-4b52-a1e6-fcc1ca1cdb8a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4926dff9-6d93-470e-bda9-367360b13b42","type":"BasicTickFormatter"},"plot":{"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"e495ec0a-f09c-4c81-a5fb-4f035c3b4575","type":"BasicTicker"}},"id":"9b7295b6-a56f-43cf-ac64-8e1b7a3df5a4","type":"LinearAxis"},{"attributes":{},"id":"e88dc2e2-24e8-437b-a047-d5fd3bff3567","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[6.333234703041475,6.873123316977314,6.810207324125552,6.980794642913759,6.375876825354223,6.2653334540584265,6.950256379381171,6.007204182437333,6.860443878913372,6.650304090066672],"y":[1.574330899772996,1.9023675600211858,1.9884649241740102,1.0934571818353658,1.4765056374705288,1.6841652398026445,1.5524643605452104,1.663914614908789,1.886838179720687,1.386215731210437]}},"id":"458d17f1-6244-4850-8137-89787c1b70c4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7d81d63c-eaa8-4dc0-aaaf-f74533c9d202","type":"ColumnDataSource"},"glyph":{"id":"095a39d9-e6d6-45c3-9333-f0209e3d1e7b","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"91930218-d00f-4975-bf5a-f99b2d45d7f5","type":"Text"},"selection_glyph":null},"id":"fcd10bf7-6584-499a-b453-28aa6d4372cb","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"33690e2b-f841-458d-a750-21ea989073c3","type":"ColumnDataSource"},"glyph":{"id":"21faa27d-d297-459a-9e91-d8242548f757","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":{"id":"1b177b64-61bd-4f39-9c09-3657b32d3db1","type":"Diamond"},"selection_glyph":null},"id":"2c926d22-be15-438b-964b-2d6df9af80cb","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"102b1c0a-d418-4f87-82a4-60a47f889d1e","type":"Asterisk"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"cc5a7086-31c6-46cd-ae4c-08c136ed5174","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"123982e2-21ef-4fc4-861c-6673787f6b65","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"629ef1ef-44ba-494c-a1c9-09197c65aa73","type":"Text"},{"attributes":{},"id":"a06fb2dd-58e3-463f-ad99-b7392732b74f","type":"BasicTicker"},{"attributes":{"plot":{"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"}},"id":"06d823d0-dd26-4200-8447-dc2335614e55","type":"WheelZoomTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"80697c6e-89ab-445a-9ebe-90b95b36875c","type":"Text"},{"attributes":{"data_source":{"id":"cd7bbc82-bfe9-45c6-a78a-44e83cade6c3","type":"ColumnDataSource"},"glyph":{"id":"9d60c517-21b7-4af6-a6f9-ca9b2def08b0","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"c1a968d3-fa15-406b-b7dd-5d2e9e496c8e","type":"Text"},"selection_glyph":null},"id":"32894bdb-22a1-4308-a4d6-e22fd5b4a5aa","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_cross / o+"]}},"id":"e12ab6f4-2000-4bd0-90f3-11f15243423d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_x"]}},"id":"7d81d63c-eaa8-4dc0-aaaf-f74533c9d202","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e12ab6f4-2000-4bd0-90f3-11f15243423d","type":"ColumnDataSource"},"glyph":{"id":"a37ece62-57cf-41a0-9e32-8497aa9f1f94","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"9eaad0c5-0a52-4bca-80e0-dcc91bee8fe7","type":"Text"},"selection_glyph":null},"id":"328b075a-2320-4ec3-a8cc-f42456faec7b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"779fd6e4-efa5-4f20-bd66-7be0443a657d","type":"ColumnDataSource"},"glyph":{"id":"715bcf8d-a72f-405f-af6b-d9578b95a856","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"24a84eca-8b46-4372-a167-dfe4c585f89c","type":"Text"},"selection_glyph":null},"id":"366bdcc9-4e7c-416f-a8ca-a63c1aad19a6","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"c1a968d3-fa15-406b-b7dd-5d2e9e496c8e","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"9eaad0c5-0a52-4bca-80e0-dcc91bee8fe7","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"4991c6c9-32c9-464a-816d-245734f9bf00","type":"Text"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["inverted_triangle"]}},"id":"e0fbbd28-f889-4a7e-bfea-5cb4c713bf63","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2.4827627889106356,2.524938335183203,2.2531597000782124,2.5399211435952105,2.137647929708068,2.7080729343936696,2.6590759536586877,2.288774028591765,2.230688489400349,2.9114374609346867],"y":[7.797158974852117,7.308450205762124,7.676889790918082,7.860983832390632,7.06141628165459,7.774481616538992,7.891895750426447,7.835581411196169,7.45532902273374,7.8332318686204365]}},"id":"2a9294a9-81b3-4e80-8692-e3f1f2de050d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e0fbbd28-f889-4a7e-bfea-5cb4c713bf63","type":"ColumnDataSource"},"glyph":{"id":"e798dc68-d843-425a-b828-15e10dc21bba","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"db1a788a-0109-42c0-9fdb-cb348f7ca434","type":"Text"},"selection_glyph":null},"id":"5c2ba4dc-561b-4e6a-a8af-8384477fb2c7","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"e495ec0a-f09c-4c81-a5fb-4f035c3b4575","type":"BasicTicker"}},"id":"6489bea9-db5b-4fa6-ad15-c0282c585c27","type":"Grid"},{"attributes":{"plot":{"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"}},"id":"b5eaf0f4-1d87-4006-b0d5-e2c3c81e375a","type":"SaveTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"4fdf322a-f742-40c3-bc38-7cfd85e93e74","type":"Text"},{"attributes":{"data_source":{"id":"109475e4-1a29-41b6-8cb1-2d25cae9d7a7","type":"ColumnDataSource"},"glyph":{"id":"3754e889-6d92-4b7b-a4c7-60faa0018df9","type":"Cross"},"hover_glyph":null,"nonselection_glyph":{"id":"2e9e5909-ceb7-4062-aa2a-d81364bbf9a4","type":"Cross"},"selection_glyph":null},"id":"c6d2d5c9-0836-4798-aa25-15b711810ce4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[8.479389348215438,8.147648923962704,8.81797568276099,8.042987410655725,8.807287304973334,8.510725352482734,8.723275874154819,8.186432322870111,8.576099401492394,8.17019570622786],"y":[7.919537366702684,7.716274863510158,7.328809091777436,7.504393356455755,7.418721812330121,7.354286925251679,7.483241755740202,7.268658650505258,7.516769383488396,7.341178077811732]}},"id":"109475e4-1a29-41b6-8cb1-2d25cae9d7a7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["x"]}},"id":"9f786d52-846d-4c5b-a5d8-ab8f76912e2e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["diamond"]}},"id":"8d89f4d4-6f6c-456a-9a53-dbc3b25e74ed","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"6cd013ef-246b-4ffe-b94d-c2156bdfaf32","type":"Triangle"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"8d6b9fe7-33c3-47f5-bcf4-71fa4815a22c","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a49f2a5a-8b39-42ee-800e-5ffebe2eb1d6","type":"InvertedTriangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9483ade-2401-4191-99c3-788548362ab5","type":"Circle"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"54677427-b3ab-44fe-94e5-688823887d48","type":"Text"},{"attributes":{"data_source":{"id":"060551c8-1995-480c-91c8-67fe66cb3340","type":"ColumnDataSource"},"glyph":{"id":"f17b63f3-df67-499b-bba0-169d7236af94","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":{"id":"102b1c0a-d418-4f87-82a4-60a47f889d1e","type":"Asterisk"},"selection_glyph":null},"id":"2f867b5f-ce39-4430-8544-91a58d801fa7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[4.978662633347388,4.1882817164741,4.149228142382543,4.1041098545964,4.860933233150964,4.609257516883314,4.372457730787334,4.460340159509307,4.315128823581466,4.766722350257487],"y":[4.587848290971455,4.095113613765156,4.399822290068694,4.595136163209967,4.452336858775572,4.418411500205364,4.47170261412538,4.142613752851382,4.953391928314062,4.693955246738804]}},"id":"e9edf1d8-7a8d-4f7f-a442-c96481db7418","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"21faa27d-d297-459a-9e91-d8242548f757","type":"Diamond"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"b48042e8-fb2c-4a7f-a697-d2231e01cd5a","type":"CircleCross"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e87a3a89-6262-4830-8d2c-2131efb32d29","type":"SquareX"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[4.626280479216127,4.0228303570598705,4.418303736105637,4.033352829030161,4.071121021719656,4.189203179246495,4.0134524520826815,4.690613835215911,4.408450160859671,4.187737648312345],"y":[7.550554214099851,7.164582423484918,7.294815785551502,7.315674782287159,7.278778133353275,7.770237698106054,7.432092652841704,7.775798522984589,7.235322858803226,7.929662554827089]}},"id":"d4356122-b2d6-400a-9219-b728be21a03b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"}},"id":"0210b661-25cf-4106-93ef-123d072a8f9e","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[6.17920610846241,6.772246189463597,6.3834236606137775,6.226754530993334,6.305451564012648,6.9336309857811536,6.720906381528427,6.669962995845252,6.171971545580742,6.580348704917521],"y":[7.914212986790527,7.823061928667178,7.818181099245914,7.61546576507069,7.950957538483802,7.252586763623254,7.854673178165189,7.825155759413485,7.436767774719677,7.199819015061287]}},"id":"33690e2b-f841-458d-a750-21ea989073c3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9f786d52-846d-4c5b-a5d8-ab8f76912e2e","type":"ColumnDataSource"},"glyph":{"id":"cc5a7086-31c6-46cd-ae4c-08c136ed5174","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"629ef1ef-44ba-494c-a1c9-09197c65aa73","type":"Text"},"selection_glyph":null},"id":"7fcf3310-9b2d-4b2c-9826-422ab7ef31fd","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["cross / +"]}},"id":"70405d8a-73f2-47c9-b56e-e5140d53feaf","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"24a84eca-8b46-4372-a167-dfe4c585f89c","type":"Text"},{"attributes":{"callback":null},"id":"c54f57b2-96f9-490e-b3e6-e4419a37a68e","type":"DataRange1d"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"c2f5c67a-6019-49a7-94b9-92bc4aca8c11","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[8.501719229832126,8.805576909822713,8.628635008519328,8.765677831690732,8.142062889350582,8.84869232450373,8.051179735912296,8.86038521675389,8.057071067891254,8.49176617642857],"y":[4.719528216077,4.416553213032763,4.847799857853461,4.731224752415646,4.995008763601721,4.172208784365004,4.089698101154853,4.246481853279656,4.750763458699833,4.986471264536358]}},"id":"5aada58b-7b55-482f-8352-75fb186aabac","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5aada58b-7b55-482f-8352-75fb186aabac","type":"ColumnDataSource"},"glyph":{"id":"4612e492-60e3-4f27-90d6-81630f117cb8","type":"X"},"hover_glyph":null,"nonselection_glyph":{"id":"03e9a74f-f08b-48b1-ae09-c7ad4baac7bb","type":"X"},"selection_glyph":null},"id":"3a60fdc9-9bbb-44fe-ba2d-5f7304f30c2b","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"095a39d9-e6d6-45c3-9333-f0209e3d1e7b","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"db1a788a-0109-42c0-9fdb-cb348f7ca434","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"31f44c0b-4afa-41a0-aabe-553908669a3d","type":"Square"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"a37ece62-57cf-41a0-9e32-8497aa9f1f94","type":"Text"},{"attributes":{"data_source":{"id":"3a51de92-43cb-4643-8820-50f8e3c36da7","type":"ColumnDataSource"},"glyph":{"id":"8901f477-0893-462f-a6c9-d9508adeb7ef","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":{"id":"509616eb-cb09-46a5-bf3e-fe7062c7c06a","type":"CircleX"},"selection_glyph":null},"id":"0e90685e-6c53-459f-aefb-a271a2ee9350","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"29ea55d5-11ed-44a3-89b8-b55851faa0d8","type":"Text"},{"attributes":{"data_source":{"id":"e9edf1d8-7a8d-4f7f-a442-c96481db7418","type":"ColumnDataSource"},"glyph":{"id":"e87a3a89-6262-4830-8d2c-2131efb32d29","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":{"id":"8153a417-337c-4062-a6af-4a9aa0533aff","type":"SquareX"},"selection_glyph":null},"id":"f6677b7a-aea5-4215-acfc-0237cbeb9067","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d4356122-b2d6-400a-9219-b728be21a03b","type":"ColumnDataSource"},"glyph":{"id":"d61bf1ef-e4b5-4663-aca2-3c74ea2d9765","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":{"id":"9f2fa068-b034-4dd7-b398-034283bf7683","type":"SquareCross"},"selection_glyph":null},"id":"f1c61118-45d7-4150-98e2-f4fee17ffa8f","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"a06fb2dd-58e3-463f-ad99-b7392732b74f","type":"BasicTicker"}},"id":"07b7d410-6269-4369-a533-a1741c8d50ac","type":"Grid"},{"attributes":{},"id":"4926dff9-6d93-470e-bda9-367360b13b42","type":"BasicTickFormatter"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"a3acfe19-56d8-4190-a8de-eedfb8041f54","type":"Text"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_cross"]}},"id":"779fd6e4-efa5-4f20-bd66-7be0443a657d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0045672c-516c-48e7-b3d2-f344f41518ca","type":"ColumnDataSource"},"glyph":{"id":"b9483ade-2401-4191-99c3-788548362ab5","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"b152fead-e110-4c9c-b3ff-c22ee45bc24d","type":"Circle"},"selection_glyph":null},"id":"11670968-4cce-4a6d-8169-6be1fd88bc30","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"34224607-7053-4af6-b1a6-29f713a060a0","type":"PanTool"},{"id":"06d823d0-dd26-4200-8447-dc2335614e55","type":"WheelZoomTool"},{"id":"bdbbcfd2-43bd-463d-b8eb-bd5c7d4b35d9","type":"BoxZoomTool"},{"id":"b5eaf0f4-1d87-4006-b0d5-e2c3c81e375a","type":"SaveTool"},{"id":"0210b661-25cf-4106-93ef-123d072a8f9e","type":"ResetTool"},{"id":"f7b0788a-fe55-422a-90b9-485841994321","type":"HelpTool"}]},"id":"e3af6f68-19d4-4077-8a73-6c3c7973257d","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["triangle"]}},"id":"95585a8d-9d74-4fd3-9dbb-a49b941d8c69","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1223f5bd-a902-40af-a74d-b7ba3c1f2ebe","type":"ColumnDataSource"},"glyph":{"id":"a49f2a5a-8b39-42ee-800e-5ffebe2eb1d6","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":{"id":"ae0cb1e2-988f-4453-98be-83e223cb53ac","type":"InvertedTriangle"},"selection_glyph":null},"id":"49e517e1-4201-4409-b69c-4e1671d3e63d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"aac40743-40cb-46f6-adff-083e9b734c33","type":"CircleCross"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"03e9a74f-f08b-48b1-ae09-c7ad4baac7bb","type":"X"},{"attributes":{"data_source":{"id":"b2f38058-d4f4-42ec-a9db-ed5590c9ee5a","type":"ColumnDataSource"},"glyph":{"id":"8d6b9fe7-33c3-47f5-bcf4-71fa4815a22c","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"cc780105-6312-4c04-aef3-3703af2b1ffe","type":"Text"},"selection_glyph":null},"id":"3464c269-b4c0-4846-a71d-7500ce3f746b","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"e798dc68-d843-425a-b828-15e10dc21bba","type":"Text"},{"attributes":{"data_source":{"id":"8d89f4d4-6f6c-456a-9a53-dbc3b25e74ed","type":"ColumnDataSource"},"glyph":{"id":"c2f5c67a-6019-49a7-94b9-92bc4aca8c11","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"a3acfe19-56d8-4190-a8de-eedfb8041f54","type":"Text"},"selection_glyph":null},"id":"f8cf3836-a6eb-4ba3-b43d-3f0497a5d3f4","type":"GlyphRenderer"},{"attributes":{},"id":"d1ad2e3c-a91d-486f-84cc-1734c9fd9b1e","type":"ToolEvents"},{"attributes":{"data_source":{"id":"70405d8a-73f2-47c9-b56e-e5140d53feaf","type":"ColumnDataSource"},"glyph":{"id":"ee1ad3de-5595-426b-944e-32cd5aed6ece","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"4991c6c9-32c9-464a-816d-245734f9bf00","type":"Text"},"selection_glyph":null},"id":"1808da5e-8434-40e3-a2cf-f72fb3dbdade","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"fe05342a-95ec-4f22-8628-2906c50a5341","type":"ColumnDataSource"},"glyph":{"id":"31f44c0b-4afa-41a0-aabe-553908669a3d","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"16193a88-a124-4ac9-980d-4d9853cd3d31","type":"Square"},"selection_glyph":null},"id":"8d0e638d-6445-4a46-a3f7-701e9f580ab0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b177b64-61bd-4f39-9c09-3657b32d3db1","type":"Diamond"},{"attributes":{"plot":null,"text":"Bokeh Markers"},"id":"cb783269-b1a6-43aa-b06b-6657515f0756","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[6.721532361123745,6.098401389772197,6.180297656002399,6.669893656284997,6.6811937090321605,6.213384585386493,6.194045998474781,6.648946465759588,6.500368129656998,6.128562039282124],"y":[4.787442987257524,4.7638956910389965,4.017981153195331,4.852395395670263,4.63551516208021,4.039000738960575,4.935878032220464,4.456159531538637,4.671383055217295,4.785563996668101]}},"id":"1223f5bd-a902-40af-a74d-b7ba3c1f2ebe","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"e88dc2e2-24e8-437b-a047-d5fd3bff3567","type":"BasicTickFormatter"},"plot":{"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"a06fb2dd-58e3-463f-ad99-b7392732b74f","type":"BasicTicker"}},"id":"5e429ac3-ceac-413b-94a5-06b6b05b5b82","type":"LinearAxis"},{"attributes":{},"id":"e495ec0a-f09c-4c81-a5fb-4f035c3b4575","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"f17b63f3-df67-499b-bba0-169d7236af94","type":"Asterisk"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e136fca0-0401-4a97-8e40-b5a04af1bd29","type":"BoxAnnotation"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"579f7bd3-9a8d-4858-b368-d916d4d4ec30","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2.2209318497756985,2.8390581927038836,2.081206099491849,2.9813702628441194,2.2023099401757618,2.559893519007898,2.1432946428838404,2.9886993159304613,2.970897816959999,2.0572659169082437],"y":[4.764748738216094,4.7293713337826935,4.890882231434049,4.023242572660263,4.858742347399305,4.4446622916764,4.635945899936533,4.658622137071447,4.774172744741749,4.812692671522165]}},"id":"3a51de92-43cb-4643-8820-50f8e3c36da7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2.4106810845646227,2.8539254689138147,2.548026774919715,2.9372136801026096,2.4867557262477398,2.7961967841400286,2.8314712202604526,2.7840199090981472,2.608398358115669,2.4650283210000294],"y":[1.9708665533712886,1.1746398826481275,1.0284499146512944,1.9068487146892625,1.761874977354895,1.6049472246742624,1.1039656286521664,1.8011232517620823,1.691087316440528,1.1045466914426392]}},"id":"0045672c-516c-48e7-b3d2-f344f41518ca","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"509616eb-cb09-46a5-bf3e-fe7062c7c06a","type":"CircleX"},{"attributes":{"data_source":{"id":"2a9294a9-81b3-4e80-8692-e3f1f2de050d","type":"ColumnDataSource"},"glyph":{"id":"aac40743-40cb-46f6-adff-083e9b734c33","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":{"id":"b48042e8-fb2c-4a7f-a697-d2231e01cd5a","type":"CircleCross"},"selection_glyph":null},"id":"3d54407d-a146-4007-9625-ff87a3628398","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"2e9e5909-ceb7-4062-aa2a-d81364bbf9a4","type":"Cross"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_x / ox"]}},"id":"cd7bbc82-bfe9-45c6-a78a-44e83cade6c3","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"3754e889-6d92-4b7b-a4c7-60faa0018df9","type":"Cross"},{"attributes":{"plot":{"id":"2e77f5d5-fad9-4103-bdc2-d65325d201cd","subtype":"Figure","type":"Plot"}},"id":"34224607-7053-4af6-b1a6-29f713a060a0","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"f96c09fc-7b58-400b-9e83-c324f39c91a9","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f2fa068-b034-4dd7-b398-034283bf7683","type":"SquareCross"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"ae0cb1e2-988f-4453-98be-83e223cb53ac","type":"InvertedTriangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"8901f477-0893-462f-a6c9-d9508adeb7ef","type":"CircleX"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"ee1ad3de-5595-426b-944e-32cd5aed6ece","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"9d60c517-21b7-4af6-a6f9-ca9b2def08b0","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[4.238631945908836,4.271182398760249,4.0617975090507805,4.056204117352113,4.298777188064288,4.896356527355041,4.571143822146388,4.9858505538312,4.169234420026747,4.55700491721055],"y":[1.9296976807856807,1.0246740746696243,1.275864460396325,1.4825294964435929,1.395430540314254,1.8012092642042614,1.624793104246375,1.6253313097462523,1.650904125012369,1.4661639893620495]}},"id":"fe05342a-95ec-4f22-8628-2906c50a5341","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"95585a8d-9d74-4fd3-9dbb-a49b941d8c69","type":"ColumnDataSource"},"glyph":{"id":"29ea55d5-11ed-44a3-89b8-b55851faa0d8","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"54677427-b3ab-44fe-94e5-688823887d48","type":"Text"},"selection_glyph":null},"id":"5f82a836-4643-4151-a8a4-d51abb95733d","type":"GlyphRenderer"}],"root_ids":["2e77f5d5-fad9-4103-bdc2-d65325d201cd"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"214e07f9-9577-48eb-bb90-c0b7e9feb317","elementid":"5da44089-230c-46ae-a3bb-deec386dfee1","modelid":"2e77f5d5-fad9-4103-bdc2-d65325d201cd"}];
                  
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