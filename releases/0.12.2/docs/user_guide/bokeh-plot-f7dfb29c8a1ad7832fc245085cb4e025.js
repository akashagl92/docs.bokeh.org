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
      };var element = document.getElementById("a32db01d-d9cc-43a5-8111-ed023bbd44ad");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a32db01d-d9cc-43a5-8111-ed023bbd44ad' but no matching script tag was found. ")
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
                  var docs_json = {"a4700c11-75a9-4739-ae21-ff285068272b":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(151.1, 164.3]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[8.0],"label":["(151.1, 164.3]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["157.7"],"y":[4.0]}},"id":"c32937b3-3abf-44e9-a485-0956da1f6874","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f20b4f3f-939e-47fa-9697-22a3b30ea335","type":"ColumnDataSource"},"glyph":{"id":"b5057abf-183a-4113-a0f5-a4c85ea01373","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"23df5c2e-96c2-40d7-a19b-b0b5d9ddcb78","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"93cdcd72-e248-4931-9541-87e48911bd3d","type":"ColumnDataSource"},"glyph":{"id":"c1f25b38-1e7d-422c-acbf-2053c4494dea","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"24b901c7-1adc-4189-94d0-ecaf95654265","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7e44e9cf-16c9-47ec-8124-743dcb724d50","type":"ColumnDataSource"},"glyph":{"id":"d5bf6430-117d-4d59-ba54-f599bc88d89e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ea1e46c5-db60-4fb0-a2f4-faf285170177","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(85.4, 98.6]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[84.0],"label":["(85.4, 98.6]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["92.0"],"y":[42.0]}},"id":"2850d17f-6d89-4171-9f5b-8e6b0a70994e","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":92.4},"id":"9237e06e-eb9a-4a82-9d76-b1b0d3a8a34e","type":"Range1d"},{"attributes":{"plot":{"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"}},"id":"3d07e476-165a-487c-acf6-26de9f7deed0","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"}},"id":"ac99c841-f58a-4f2b-99af-59ab5835c74e","type":"PanTool"},{"attributes":{"data_source":{"id":"a9746ae8-d317-4a22-baab-bdd865431190","type":"ColumnDataSource"},"glyph":{"id":"5663ea25-36f8-4349-8f30-a11eda0f0e23","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"059212b0-d0f9-4c78-ba59-e6687fcad9c1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2850d17f-6d89-4171-9f5b-8e6b0a70994e","type":"ColumnDataSource"},"glyph":{"id":"8ae4f765-ed00-4f6f-90da-26fb51d8d4e7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"806e9dd8-0cc7-4fe2-84ff-97c8c77151e5","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"03bcbf17-e18a-45ff-8bb3-5fc19dd14dff","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e9e37fc-1921-49d7-9c11-f80758802eb4","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d5bf6430-117d-4d59-ba54-f599bc88d89e","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9be10f80-5fd4-4180-9780-903e8c9151f9","type":"Rect"},{"attributes":{"data_source":{"id":"d54a9a54-a8c1-4dfd-bcdf-c7d170917972","type":"ColumnDataSource"},"glyph":{"id":"7e9e37fc-1921-49d7-9c11-f80758802eb4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"947d2c8e-a294-4a7d-971e-31b5f8fd1b96","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2f3d5900-2cf1-4a8e-84ee-c0a090a51768","type":"BoxAnnotation"},"plot":{"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"}},"id":"0729a062-e341-4f67-8f83-7c1ee173859d","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(216.9, 230.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[5.0],"label":["(216.9, 230.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["223.45"],"y":[2.5]}},"id":"37427f8b-28f3-4f79-8e61-95b6117e5a79","type":"ColumnDataSource"},{"attributes":{"axis_label":"Count( Hp )","formatter":{"id":"4e49a0be-46a5-4440-b9bb-62bf67c12cfb","type":"BasicTickFormatter"},"plot":{"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"},"ticker":{"id":"7a005afa-350a-4861-9e5c-e199f056310a","type":"BasicTicker"}},"id":"aeba47a7-1cb8-4785-8600-9f9f01359ba0","type":"LinearAxis"},{"attributes":{},"id":"e4a45029-b8f8-479d-887b-ba9ed8b87a45","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(138.0, 151.1]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[42.0],"label":["(138.0, 151.1]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["144.55"],"y":[21.0]}},"id":"a8aca998-3de1-4cb7-9f4b-4596e17dfc50","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7f71ba45-d2d4-420c-8d7a-61d76c484a86","type":"ColumnDataSource"},"glyph":{"id":"623c922a-c0ef-41c8-918d-4b498308b644","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ab6a8dfc-7766-4879-b3cb-75f843d7b7b1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(59.1, 72.3]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[67.0],"label":["(59.1, 72.3]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["65.7"],"y":[33.5]}},"id":"7f71ba45-d2d4-420c-8d7a-61d76c484a86","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ac99c841-f58a-4f2b-99af-59ab5835c74e","type":"PanTool"},{"id":"3d07e476-165a-487c-acf6-26de9f7deed0","type":"WheelZoomTool"},{"id":"0729a062-e341-4f67-8f83-7c1ee173859d","type":"BoxZoomTool"},{"id":"ee345b2f-c693-4562-a081-ae277c2fdd51","type":"SaveTool"},{"id":"cf2f9e71-dfd5-4e87-ac14-a59195cdf1dc","type":"ResetTool"},{"id":"a3903aec-94f3-4089-abad-66daefdab440","type":"HelpTool"}]},"id":"131bec7a-3954-439a-86bf-8ba38b86cfb5","type":"Toolbar"},{"attributes":{"data_source":{"id":"090a0403-d003-483e-91ff-8e19fe5157b1","type":"ColumnDataSource"},"glyph":{"id":"9be10f80-5fd4-4180-9780-903e8c9151f9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"808d1f31-f752-4d64-b9bd-86dac53dbf8e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"}},"id":"cf2f9e71-dfd5-4e87-ac14-a59195cdf1dc","type":"ResetTool"},{"attributes":{"location":"top_left","plot":{"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"}},"id":"b5d71946-9f63-46f9-a4a4-e8616d70575e","type":"Legend"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5057abf-183a-4113-a0f5-a4c85ea01373","type":"Rect"},{"attributes":{"callback":null,"end":236.92142857142855,"start":39.07857142857143},"id":"e6526b78-7025-45f1-bd87-80efccf96089","type":"Range1d"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(98.6, 111.7]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[51.0],"label":["(98.6, 111.7]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["105.15"],"y":[25.5]}},"id":"a9746ae8-d317-4a22-baab-bdd865431190","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"HP Distribution"},"id":"dbdd5bde-682f-437a-9727-531a41d8b193","type":"Title"},{"attributes":{"axis_label":"hp","formatter":{"id":"9b7e4e19-9766-4ad1-9d9c-dc30d22fb6a3","type":"BasicTickFormatter"},"plot":{"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"},"ticker":{"id":"e4a45029-b8f8-479d-887b-ba9ed8b87a45","type":"BasicTicker"}},"id":"6d1c9a13-2c8b-4d73-a9a9-270e0aac2deb","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(177.4, 190.6]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[8.0],"label":["(177.4, 190.6]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["184.0"],"y":[4.0]}},"id":"93cdcd72-e248-4931-9541-87e48911bd3d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(72.3, 85.4]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[59.0],"label":["(72.3, 85.4]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857153],"x":["78.85"],"y":[29.5]}},"id":"1120bc2f-7280-4cc9-af8f-bb2ec8df90c1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c1f25b38-1e7d-422c-acbf-2053c4494dea","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4a874d8-1643-4bf6-b56d-f79071f61ded","type":"Rect"},{"attributes":{"data_source":{"id":"c32937b3-3abf-44e9-a485-0956da1f6874","type":"ColumnDataSource"},"glyph":{"id":"03bcbf17-e18a-45ff-8bb3-5fc19dd14dff","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7ab7b4d2-5245-419c-b3c7-47c86b5c8c55","type":"GlyphRenderer"},{"attributes":{},"id":"911047ad-3bac-43a8-8fc9-2823ca6e64ad","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"},"ticker":{"id":"7a005afa-350a-4861-9e5c-e199f056310a","type":"BasicTicker"}},"id":"9546e683-c531-4cba-95cb-6043df64782b","type":"Grid"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ae4f765-ed00-4f6f-90da-26fb51d8d4e7","type":"Rect"},{"attributes":{"data_source":{"id":"1120bc2f-7280-4cc9-af8f-bb2ec8df90c1","type":"ColumnDataSource"},"glyph":{"id":"34584c04-b306-47ec-b792-408081ec684b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a05eac80-9e10-4267-910c-b493e077a68e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"37427f8b-28f3-4f79-8e61-95b6117e5a79","type":"ColumnDataSource"},"glyph":{"id":"2aecb5f3-1aef-4516-8437-501e3f457c3e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7417a0df-97f8-471c-bdb7-95428606796e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"703a6415-57bc-485b-bdc3-ebadfb3a1312","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"623c922a-c0ef-41c8-918d-4b498308b644","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(190.6, 203.7]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[4.0],"label":["(190.6, 203.7]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857167],"x":["197.15"],"y":[2.0]}},"id":"d54a9a54-a8c1-4dfd-bcdf-c7d170917972","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"83b4af5f-1b0d-4291-987b-5933c5fc1aa9","type":"ColumnDataSource"},"glyph":{"id":"a4a874d8-1643-4bf6-b56d-f79071f61ded","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"086198a2-f3bf-4469-b7e9-a86667eb758e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(203.7, 216.9]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[5.0],"label":["(203.7, 216.9]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["210.3"],"y":[2.5]}},"id":"83b4af5f-1b0d-4291-987b-5933c5fc1aa9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a8aca998-3de1-4cb7-9f4b-4596e17dfc50","type":"ColumnDataSource"},"glyph":{"id":"e09fbe8d-5d40-4617-9649-43c3dfb73cbf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0fcf8baf-1fce-48ef-bdd4-18bef36a4fb8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"}},"id":"a3903aec-94f3-4089-abad-66daefdab440","type":"HelpTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2aecb5f3-1aef-4516-8437-501e3f457c3e","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(111.7, 124.9]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[15.0],"label":["(111.7, 124.9]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857153],"x":["118.3"],"y":[7.5]}},"id":"090a0403-d003-483e-91ff-8e19fe5157b1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5663ea25-36f8-4349-8f30-a11eda0f0e23","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(124.9, 138.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[14.0],"label":["(124.9, 138.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["131.45"],"y":[7.0]}},"id":"f20b4f3f-939e-47fa-9697-22a3b30ea335","type":"ColumnDataSource"},{"attributes":{},"id":"4e49a0be-46a5-4440-b9bb-62bf67c12cfb","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"6d1c9a13-2c8b-4d73-a9a9-270e0aac2deb","type":"LinearAxis"}],"height":400,"left":[{"id":"aeba47a7-1cb8-4785-8600-9f9f01359ba0","type":"LinearAxis"}],"renderers":[{"id":"2f3d5900-2cf1-4a8e-84ee-c0a090a51768","type":"BoxAnnotation"},{"id":"ea1e46c5-db60-4fb0-a2f4-faf285170177","type":"GlyphRenderer"},{"id":"ab6a8dfc-7766-4879-b3cb-75f843d7b7b1","type":"GlyphRenderer"},{"id":"a05eac80-9e10-4267-910c-b493e077a68e","type":"GlyphRenderer"},{"id":"806e9dd8-0cc7-4fe2-84ff-97c8c77151e5","type":"GlyphRenderer"},{"id":"059212b0-d0f9-4c78-ba59-e6687fcad9c1","type":"GlyphRenderer"},{"id":"808d1f31-f752-4d64-b9bd-86dac53dbf8e","type":"GlyphRenderer"},{"id":"23df5c2e-96c2-40d7-a19b-b0b5d9ddcb78","type":"GlyphRenderer"},{"id":"0fcf8baf-1fce-48ef-bdd4-18bef36a4fb8","type":"GlyphRenderer"},{"id":"7ab7b4d2-5245-419c-b3c7-47c86b5c8c55","type":"GlyphRenderer"},{"id":"b1ca2dce-d2b1-49cb-8ea7-95c6db469b2a","type":"GlyphRenderer"},{"id":"24b901c7-1adc-4189-94d0-ecaf95654265","type":"GlyphRenderer"},{"id":"947d2c8e-a294-4a7d-971e-31b5f8fd1b96","type":"GlyphRenderer"},{"id":"086198a2-f3bf-4469-b7e9-a86667eb758e","type":"GlyphRenderer"},{"id":"7417a0df-97f8-471c-bdb7-95428606796e","type":"GlyphRenderer"},{"id":"b5d71946-9f63-46f9-a4a4-e8616d70575e","type":"Legend"},{"id":"6d1c9a13-2c8b-4d73-a9a9-270e0aac2deb","type":"LinearAxis"},{"id":"aeba47a7-1cb8-4785-8600-9f9f01359ba0","type":"LinearAxis"},{"id":"9546e683-c531-4cba-95cb-6043df64782b","type":"Grid"}],"title":{"id":"dbdd5bde-682f-437a-9727-531a41d8b193","type":"Title"},"tool_events":{"id":"911047ad-3bac-43a8-8fc9-2823ca6e64ad","type":"ToolEvents"},"toolbar":{"id":"131bec7a-3954-439a-86bf-8ba38b86cfb5","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"e6526b78-7025-45f1-bd87-80efccf96089","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"9237e06e-eb9a-4a82-9d76-b1b0d3a8a34e","type":"Range1d"}},"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"d0a26f3c-efb0-4181-af4b-c52025f4a330","subtype":"Chart","type":"Plot"}},"id":"ee345b2f-c693-4562-a081-ae277c2fdd51","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(164.3, 177.4]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[15.0],"label":["(164.3, 177.4]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["170.85"],"y":[7.5]}},"id":"1e561e6e-2bd6-4060-858f-383a09649750","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2f3d5900-2cf1-4a8e-84ee-c0a090a51768","type":"BoxAnnotation"},{"attributes":{},"id":"7a005afa-350a-4861-9e5c-e199f056310a","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e09fbe8d-5d40-4617-9649-43c3dfb73cbf","type":"Rect"},{"attributes":{},"id":"9b7e4e19-9766-4ad1-9d9c-dc30d22fb6a3","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1e561e6e-2bd6-4060-858f-383a09649750","type":"ColumnDataSource"},"glyph":{"id":"703a6415-57bc-485b-bdc3-ebadfb3a1312","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b1ca2dce-d2b1-49cb-8ea7-95c6db469b2a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34584c04-b306-47ec-b792-408081ec684b","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["[46.0, 59.1]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[15.0],"label":["[46.0, 59.1]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["52.55"],"y":[7.5]}},"id":"7e44e9cf-16c9-47ec-8124-743dcb724d50","type":"ColumnDataSource"}],"root_ids":["d0a26f3c-efb0-4181-af4b-c52025f4a330"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"a4700c11-75a9-4739-ae21-ff285068272b","elementid":"a32db01d-d9cc-43a5-8111-ed023bbd44ad","modelid":"d0a26f3c-efb0-4181-af4b-c52025f4a330"}];
                  
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