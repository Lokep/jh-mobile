import { shallowMount, mount } from '@vue/test-utils';
import ArticleCard from '../../justui/packages/jh-article-card/jh-article-card';

describe('ArticleCard is testing', () => {

  it('while title equals `title`', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        title: 'title',
      },
    });

    expect(wrapper.props().title).toBe('title');
  })

  it('while isRead to be true', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        title: 'title',
        isRead: true,
      },
    });

    expect(wrapper.classes('jh-article-card-readed')).toBe(true);
  })

  it('while reverse to be true', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        title: 'title',
        reverse: true,
      },
    });

    expect(wrapper.classes('jh-article-card-reverse')).toBe(true);
  })

  it('while shape to be true', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        title: 'title',
        shape: true,
      },
    });

    expect(wrapper.classes('jh-article-card-shape')).toBe(true);
  })

  it('while border to be true', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        title: 'title',
        border: true,
      },
    });

    expect(wrapper.classes('jh-article-card-border')).toBe(true);
  })

  it('while shadow to be true', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        title: 'title',
        shadow: true,
      },
    });

    expect(wrapper.classes('jh-article-card-shadow')).toBe(true);
  })

  it('while rows equals 1', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        title: 'title',
        rows: 1,
      },
    });

    expect(wrapper.find('.jh-article-title--single')).toEqual({ selector: '.jh-article-title--single' });
  })

  it('while rows greater than 2', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        title: 'title',
        rows: 3,
      },
    });

    expect(wrapper.find('.jh-article-title--multi').exists()).toBe(true);
  })

  it('while element is hidden', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        title: 'title',
        customStyle: {
          display: 'none',
        }
      },
    });

    expect(wrapper.find('.jh-article-card').isVisible()).toBe(false);
  })

  it('check title slot', () => {
    const wrapper = mount(ArticleCard, {
      slots: {
        header: '<span class="jh-article-title--slot">slot</span>',
      },
    });

    expect(wrapper.find('.jh-article-title--slot').exists()).toBe(true);
  })

  it('check default slot', () => {
    const wrapper = mount(ArticleCard, {
      slots: {
        default: '<span class="jh-article-body--slot">slot</span>',
      },
    });

    expect(wrapper.find('.jh-article-body--slot').exists()).toBe(true);
  })

  it('check footer slot', () => {
    const wrapper = mount(ArticleCard, {
      slots: {
        default: '<span class="jh-article-footer--slot">slot</span>',
      },
    });

    expect(wrapper.find('.jh-article-footer--slot').exists()).toBe(true);
  })

})
